let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

input.addEventListener('keypress', function (event) {
   if(event.key==="Enter")
   {
      let li = document.createElement("li");
  li.innerText = input.value;
  let deletebtn2 = document.createElement("button");
  deletebtn2.innerText = "delete";
  deletebtn2.classList.add('delete');
  li.appendChild(deletebtn2);
  if (input.value.trim()!=''){
    console.log(li.innerText);
       ul.appendChild(li);
  }
  input.value = "";
   }
});
btn.addEventListener('click',function(){
    let li = document.createElement("li");
  li.innerText = input.value;
  let deletebtn2 = document.createElement("button");
  deletebtn2.innerText = "delete";
  deletebtn2.classList.add('delete');
  li.appendChild(deletebtn2);
  if (input.value.trim()!=''){
    console.log(li.innerText);
       ul.appendChild(li);
  }
  input.value = "";
})
//event delegation uses event bubbling to apply the evnent listener on newly added elements or existing one also.
ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let li = event.target.parentElement;
    li.remove();
  }
});
