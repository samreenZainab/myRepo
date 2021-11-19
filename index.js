const http = require("http");
const express = require("express");
const index = express();
const server = http.createServer(index);


index.use((req,res,next) => {
    console.log("use function call 1");
    next(); // used to pass the control to another middleware
});
index.use((req,res,next) => {
    console.log("middleware working sucessfully");
    res.end();
});
server.listen(3000);




//anther way of creating server manually

// const server = http.createServer((req,res) => {
// console.log(req.headers);
// res.end("hello to my response");
// console.log("still working");
// res.end("hello my world");
// });
// var buffer =Buffer.alloc(utf-8);
// buffer.write("I'm a string!", "utf-8");
// var bufferRead = buffer.toString(utf-8);
// console.log(bufferRead);
// server.listen(3000);
// }
