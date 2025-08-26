let btn = document.createElement("button");
btn.innerText = "click me";
btn.addEventListener("click", function () {
  btn.classList.add("green");
});
document.querySelector("body").append(btn);