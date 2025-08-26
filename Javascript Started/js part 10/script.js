let btn=document.querySelector('button');
let head2=document.querySelector('h2');
let div1=document.querySelector('div');

btn.addEventListener('click',function(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    div1.style.backgroundColor=`rgba(${red},${green},${blue})`;
    head2.innerText=`(${red},${green},${blue})`;
});
console.dir(div1);