//const http = require("http");
const express = require("express");
const app = express();
const router = require("./routers/validUser.js");

app.use(router); // router caling

app.use((req,res,next) => { //allow us to send any type of response
    console.log("page not found error"); // check working on not
    res.status(404).send("<h1> page not found </h1>"); // if invalid path or path not found 
    next();
});

app.listen(8080);
