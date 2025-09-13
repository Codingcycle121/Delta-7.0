const express=require("express");
const app=express();
const methodOverride=require("method-override");
let port=8080;
const path=require("path");

const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();

const {v4 : uuidv4}=require("uuid");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.use(methodOverride("_method"));

app.listen(port,()=>{
    console.log(`server was running on port ${port}`);
})

let posts=[
    {
        id:uuidv4(),
        username:"krishna",
        content:"hare krishna"
    },
    {
        id:uuidv4(),
        username:"Parag",
        content:"Learning RESTful APIs"
    },
    {
        id:uuidv4(),
        username:"Ram",
        content:"Got first job at infosys"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts,time,date});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content,time,date});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let matchedUser=posts.find(post=>{
       return post.id==id;
    });
    if(matchedUser)
    res.render("id.ejs",{data:matchedUser});
    else
    {
        res.send(`No data found for ${id}`);
    }
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(post=>{
       return post.id==id;
    });
    res.render("edit.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(post=>{
       return post.id==id;
    });
    let newContent=req.body.content;
    post.content=newContent;
    res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let deletePost=posts.indexOf(posts.find(post=>post.id==id));
    posts.splice(deletePost,1);
    res.redirect("/posts");
})