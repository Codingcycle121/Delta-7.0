let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let input = document.querySelector("input");
  let country = input.value.trim();
  input.value = "";
  let collArr = await getColleges(country);
  showList(collArr, country);
});

function showList(collArr, country) {
  let list = document.querySelector("#result");
  list.innerText = "";
  for (col of collArr) {
    if (col.country.toLowerCase() == country.toLowerCase()) {
      let state = col["state-province"] || "No state Information";
      let li = document.createElement("li");
      li.innerText = `${col.name} - ${state}`;
      list.appendChild(li);
    }
  }
}

async function getColleges(country) {
  let resp = await axios.get(url + country);
  return resp.data;
}
