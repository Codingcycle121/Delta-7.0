const express=require("express");
const app=express();
let port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.listen(port,()=>{
    console.log(`server was running on port ${port}`);
})
app.set("views", path.join(__dirname,"/views")); // to define fixed path for views folder
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let rolldice=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{rolldice});
})
app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const data=require("./data.json");
    const userData=data[username];
    if(userData){
        res.status(200).render("instagram.ejs",{username,userData});
    }
    else{
        res.status(404).render("error.ejs");
    }
})