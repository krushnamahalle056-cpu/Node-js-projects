const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 1000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTML Route
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
});

// Get All Users
app.get("/api/users", (req, res) => {
    res.setHeader("X-MyName", "Krushna Mahalle");
    return res.json(users);
});

// Create User
app.post("/api/users", (req, res) => {
    const body = req.body;
    const newUser = { id: users.length + 1, ...body, };
    sers.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to save user"
            });
        }

        return res.status(201).json({status: "success",user: newUser,});

    });

});

// Get, Update and Delete by ID
app.route("/api/users/:id")

.get((req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.json(user);

})

.patch((req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    Object.assign(user, req.body);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to update user"
            });
        }

        return res.json({
            status: "success",
            user,
        });

    });

})

.delete((req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users[index];

    users.splice(index, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to delete user"
            });
        }

        return res.json({
            status: "success",
            deletedUser,
        });

    });

});

app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});     

