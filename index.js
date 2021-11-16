console.log("hello world");
const http = require("http");
const server = http.createServer((req,res) => {
console.log(req.headers);
res.end("hello to my response");
process.exit();
});
server.listen(3000);
// const requestListener = function (req,res)
// {
// res.writeHead(200);

// res.end("hello my world");
// }
// const server = http.createServer(requestListener);
// server.listen(3000);