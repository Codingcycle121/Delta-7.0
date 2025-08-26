//question 1
let input=document.createElement('input');
let btn=document.createElement('button');
btn.innerText="Click me";
document.querySelector('body').append(input,btn);
//question 2
input.placeholder="username";
btn.id="btn"
//question 3
btn=document.querySelector('#btn');
btn.classList.add('btn');
//question 4
let head1=document.createElement('h1');
head1.innerText="DOM Practice";
head1.classList.add('head1');
document.querySelector('body').prepend(head1);
//question 5
let para1=document.createElement('p');
para1.innerHTML="Apna College <b>Delta</b> Practice";
head1.insertAdjacentElement('afterend',para1);