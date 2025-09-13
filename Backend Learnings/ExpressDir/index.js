const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("you are on home path. Hare Krishna");
})

app.get("/:user/:id",(req,res)=>{
    let {user,id}=req.params;
    res.send(`<h2>Welcome to the page of @${user}</h2>`);
});

app.get("/search",(req,res)=>{
    let {q,c}=req.query;
    res.send(`Search results for ${q} and color is ${c}`);
})
// app.get("/apple",(req,res)=>{
//     res.send("you are on apple path");
// })

// app.get("/mango",(req,res)=>{
//     res.send("you are on mango path");
// })

// app.get("*",(req,res)=>{
//     res.send("page does not exist");
// })

// app.use((req,res)=>{
//     console.log("request received");
//     res.send({
//         fruit:"apple",
//         color:"red"
//     });
// });