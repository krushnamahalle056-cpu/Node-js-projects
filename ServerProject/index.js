
// // Basic server using node.js

// const http = require("http");
// const fs = require("fs");
// const myServer= http.createServer((req,res)=>{
//     if(req.url === '/favicon.ico'){
//        return res.end();
//     }
//     const log=`${Date.now()}: ${req.url} New Res Recived \n`;
//     fs.appendFile("log.txt", log, (err,data)=>{
//         switch(req.url){
//             case'/':
//                 res.end("Home page");
//             break;
//             case'/about':
//                 res.end("Hello From Server Again");
//             break;
//             default:
//                 res.end("404 Not Fount");
//         }
       
//     })
   
// });

// myServer.listen(2000,()=>{console.log("Server Started Again")});





// // <----  Next lecture   ----->

// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const myServer= http.createServer((req,res)=>{
//     if(req.url === '/favicon.ico'){
//        return res.end();
//     }
//     const log=`${Date.now()}: ${req.url} New Res Recived \n`;
//     const myUrl = url.parse(req.url);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err,data)=>{
//         switch(req.url){
//             case'/':
//                 res.end("Home page");
//             break;
//             case'/about':
//                 res.end("Hello From Server Again");
//             break;
//             default:
//                 res.end("404 Not Fount");
//         }
       
//     })
   
// });

// myServer.listen(5000,()=>{console.log("Server Started Again")});



// // <----  Next lecture http methods   ----->

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myServer= http.createServer((req,res)=>{
//     if(req.url === '/favicon.ico'){
//        return res.end();
//     }
//     const log=`${Date.now()}: ${req.method} ${req.url} New Res Recived \n`;
//     const myUrl = url.parse(req.url, true);
   
//     fs.appendFile("log.txt", log, (err,data)=>{
//         switch(myUrl.pathname){
//             case'/':
//                 if(req.method === "GET") res.end("Home page");
//             break;
//             case'/about':
//                 const username= myUrl.query.myname;
//                 res.end(`Hi, ${username}`);
//             break;
//             case'/search':
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your results for : "  + search);
//             break;
//             case'/signup':
//             if(req.method === "GET") res.end("This is a signup form");
//             else if(req.method ==="POST"){
//                 // DB Query
//                 res.end("Success");
//             }
//             default:
//                 res.end("404 Not Fount");
//         }
       
//     })
   
// });

// myServer.listen(5000,()=>{console.log("Server Started Again")});




// <----  Next lecture http methods   ----->

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer= http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
       return res.end();
    }
    const log=`${Date.now()}: ${req.method} ${req.url} New Res Recived \n`;
    const myUrl = url.parse(req.url, true);
   
    fs.appendFile("log.txt", log, (err,data)=>{
        switch(myUrl.pathname){
            case'/':
                if(req.method === "GET") res.end("Home page");
            break;
            case'/about':
                const username= myUrl.query.myname;
                res.end(`Hi, ${username}`);
            break;
            case'/search':
                const search = myUrl.query.search_query;
                res.end("Here are your results for : "  + search);
            break;
            case'/signup':
            if(req.method === "GET") res.end("This is a signup form");
            else if(req.method ==="POST"){
                // DB Query
                res.end("Success");
            }
            default:
                res.end("404 Not Fount");
        }
       
    })
   
});

myServer.listen(3000,()=>{console.log("Server Started Again")});
