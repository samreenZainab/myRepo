const http = require("http");
const express = require("express");
const index = express();

const server = http.createServer(index);
server.listen(3000);

index.use((req,res,next) => {
    console.log("sucessfully working");
    next();
});


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
