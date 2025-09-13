const express=require("express");
const app=express();
let port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

app.get("/register",(req,res)=>{
    let {username} =req.query;
    res.send(`Standard get response. Welcome ${username}`);
})

app.post("/register",(req,res)=>{
    let {username} =req.body;
    res.send(`Standard post response. Welcome ${username}`);
})