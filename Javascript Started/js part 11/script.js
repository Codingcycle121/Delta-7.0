let h1=document.querySelector('h1');
function changeColor(data)
{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                h1.style.color=data;
                resolve("h1 color changed");
            },1000);
    });
}
changeColor("red")
.then((result)=>{
    console.log(result);
    console.log("color was changed to red");
    return changeColor("orange");
})
.then((result)=>{
    console.log(result);
    console.log("color was changed orange");
    return changeColor("green");
})
.then((result)=>{
    console.log(result);
    console.log("color was changed to green");
    return changeColor("yellow");
})
.then((result)=>{
    console.log(result);
    console.log("color was changed to yellow");
    return changeColor("blue");
})
.then((result)=>{
    console.log(result);
    console.log("color was changed to blue");
})
.catch((error)=>{
    console.log(error);
    console.log("color was not changed");
});