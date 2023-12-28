const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.json([
        {
            id:1,
            name:"deepesh rastogi",
            age:30
        },
        {
            id:2,
            name:"ravi singh",
            age:34
        },
        {
            id:3,
            name:"amit yadan",
            age:20
        },
        {
            id:4,
            name:"Mohit Bajwal",
            age:24
        }
    ]);
});

app.listen(5500,()=>{
    console.log("app is running on 5500 port");
});