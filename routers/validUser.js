const express = require("express");
const app = express();
const router = express.Router();


router.get("/page",(req,res)  => { // get function use call any page with the address alog with any resonse & request
    console.log("get function strat to excute ");
    res.send([ //  send funtion use to send req to server
        { 
            id: "1",
            name: "samreen"
        },
        {
            id: "2",
            name: "samreen zainab"
        },
        {
            id: "3",
            name: "zainabmalik2568"
        }
        
    ]);
});
module.exports = router;




// router.get("/page2",(req,res)  => {
//     console.log("2nd  get function excuted");
//     res.send([
       
        
//     ]);
// });

