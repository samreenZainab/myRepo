const http = require("http");
const express = require("express");
const app = express();
const router = express.Router();

app.get("/page",(req,res)  => { // get function use call any page with the address alog with any resonse & request
    console.log("get function strat to excute ");
    res.send([ //  send funtion use to send req to server
        { 
            id: "1",
            name: "sam"
        },
        {
            id: "3",
            name: "samreen"
        }
        
    ]);
});

app.get("/page2",(req,res)  => {
    console.log("2nd  get function excuted");
    res.send([
        {
            id: "2",
            name: "samr"
        }
        
    ]);
});


router.use((req,res,next) => { //allow us to send any type of response
    console.log("page not found error"); // check working on not
    res.status(404).send("<h1> page not found </h1>");
});

app.listen(8080);
