let inp=document.querySelector('input');
let btn=document.querySelector('button');
let form=document.querySelector('form');
let textarea=document.querySelector('textarea');
form.addEventListener('click',function(event){
    event.preventDefault();
})
inp.addEventListener('mouseout',function(){
    alert("mouse out triggered");
});
inp.addEventListener('keypress',function(){
    alert("key was pressed");
})
textarea.addEventListener('scroll',function(){
    alert("scroll triggered");
})
window.addEventListener('load',function(){
    alert("load triggered");
})