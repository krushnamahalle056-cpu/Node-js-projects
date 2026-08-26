const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connnectToMongoDB } = require("./connect");
const {checkForAuthentication , restrictTo} = require("./middlewares/auth")

const URL = require("./models/url");

const URLRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");


const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


const PORT = 8001;

connnectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["USER","ADMIN"]), URLRoutes);
app.use("/user", userRoute);
app.use("/",staticRoute);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  console.log("Short ID:", shortId);          // Temporary code
  console.log("Entry:", entry);

  if (!entry) {
    return res.status(404).send("Short URL not found");                      // find entry
  }

  return res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT =${PORT}`))

 