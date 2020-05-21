var data;

var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];


// get method = READ
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open("get", "http://localhost:3000/posts", true);
oReq.send();

function reqListener() {
  data = JSON.parse(this.responseText);
  //console.log(data);

  var ulInc = document.createElement("ul");
  var ulOut = document.createElement("ul");
  for (let i = 0; i < data.length; i++) {
    let anotherContent = document.createElement("div");
    let wholeContent = document.createElement("div");
    let buttons = document.createElement("div");

    let name = document.createElement("div");
    let value = document.createElement("div");
    let date = document.createElement("div");
    let edit = document.createElement("d");
    let del = document.createElement("d");

    name.innerText = data[i]["name"];
    value.innerText = data[i]["value"];
    date.innerText = data[i]["date"];
    edit.innerHTML =
      "<button class =  \"add-btn\" onclick='prepareEditEntity(" + i + ")'><i class=\"fas fa-edit\"></i></button>";
    del.innerHTML = "<button class = \"delete\" onclick='deleteEntity(" + i + ")'> <i class=\"far fa-times-circle\"></i></button>";

    name.classList.add("element");
    name.classList.add("name");
    value.classList.add("element");
    value.classList.add("value");
    date.classList.add("element");
    date.classList.add("date");
    wholeContent.classList.add("data");
    buttons.classList.add("buttons");

    wholeContent.appendChild(name);
    wholeContent.appendChild(date);
    wholeContent.appendChild(value);
    anotherContent.appendChild(wholeContent);
    buttons.appendChild(edit);
    buttons.appendChild(del);
    anotherContent.appendChild(buttons);

    if (data[i]["type"] == "outcome") {
      anotherContent.classList.add("outcome");
      anotherContent.classList.add("bigdata");
      ulOut.appendChild(anotherContent);
    } else {
      ulInc.appendChild(anotherContent);
      anotherContent.classList.add("income");
      anotherContent.classList.add("bigdata");
    }
  }
  document.getElementsByTagName("main")[0].appendChild(ulInc);
  document.getElementsByTagName("main")[0].appendChild(ulOut);
  calculateTotal();
}

function reqError(err) {
  console.log("Fetch Error :-S", err);
}

// create
async function addEntity() {
  let name = document.getElementsByName("name")[0].value;
  let type = document.getElementsByName("type")[0].value;
  let value = document.getElementsByName("value")[0].value;
  let userDate = document.getElementsByName("date")[0].value;
  let date = new Date(userDate).toISOString().split("T")[0];

  let oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('post', "http://localhost:3000/posts", true);
  oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  oReq.send(
    "name=" + name + "&type=" + type + "&value=" + value + "&date=" + date
  );
  location.reload();
  calculateTotal();
}

// update
async function editEntity() {
  var name = document.getElementsByName("name")[1].value;
  var type = document.getElementsByName("type")[1].value;
  var value = document.getElementsByName("value")[1].value;
  var date = document.getElementsByName("date")[1].value;
  var id = document.getElementsByName("id")[1].value;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  await oReq.open("put", "http://localhost:3000/posts/" + id, true);
  await oReq.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  await oReq.send(
    "name=" + name + "&type=" + type + "&value=" + value + "&date=" + date
  );
  location.reload();
  calculateTotal();
}

function prepareEditEntity(id) {
  modal.style.display = "block";
  document.getElementsByName("name")[1].value = data[id]["name"];
  document.getElementsByName("type")[1].value = data[id]["type"];
  document.getElementsByName("value")[1].value = data[id]["value"];
  document.getElementsByName("id")[1].value = data[id]["id"];
  document.getElementsByName("date")[1].value = data[id]["date"];
  document.getElementById("cancel_button").hidden = false;
}

function cancelEditEntity() {
  modal.style.display = "none";
  document.getElementsByName("name")[0].value = "";
  document.getElementsByName("type")[0].value = "";
  document.getElementsByName("value")[0].value = "";
  document.getElementsByName("date")[0].value = new Date();
  document.getElementById("cancel_button").hidden = true;
}

// delete
async function deleteEntity(id) {
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  await oReq.open(
    "delete",
    "http://localhost:3000/posts/" + data[id]["id"],
    false
  );
  await oReq.send();

  location.reload();
  calculateTotal();
}

document.getElementById("changeName").onclick = function () {
  var txt;
  var person = prompt("Would you like to enter your name?:", "Harry Potter");
  if (person == null || person == "") {
    txt = "you.";}
   else {
    txt = person;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("nume", txt);
      document.getElementById("changeName").innerHTML = localStorage.getItem("nume");
    } else {
      document.getElementById("changeName").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }
  document.getElementById("changeName").innerHTML = localStorage("key");
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

async function calculateTotal(){
  let total = 0;
  for(let i = 0; i < data.length; i++)
    if(data[i]["type"] == "income")
      total = total + parseInt(data[i]["value"]);
    else
      total = total - parseInt(data[i]["value"]);
  let totalVal = document.getElementById("total-value");
  if(total > 0)
    totalVal.style.color = "#2a88ad";
  else
  totalVal.style.color = "rgb(255, 102, 102)";
  totalVal.innerText = total;
}