let input = document.querySelector("input");
let head2 = document.querySelector("h2");
input.addEventListener("input", function () {
  let str = "";
  console.log('event');
  for (let i = 0; i < this.value.length; i++) {
    let char = this.value.charCodeAt(i);
    if (
      (char >= 97 && char <= 122) ||
      (char >= 65 && char <= 90) ||
      char == 32
    ) {
      str += this.value.charAt(i);
    } 
  }
   if (this.value.trim()=="") {
      head2.innerText = "Text Editor";
    }
    else{
        head2.innerText = str;
    }
});
