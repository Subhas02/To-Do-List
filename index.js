var input = document.getElementById("input");
var listitem = document.getElementById("list-item");
function add() {
  if (input.value == "") {
    alert("You must write something!");
  } else {
    var listtask = document.createElement("li");
    listtask.innerHTML = input.value;
    listtask.className = "listrow";
    listitem.append(listtask);
  }
  var deletetask = document.createElement("button");
  deletetask.innerHTML = "Delete";
  deletetask.className = "delete-button";
  listtask.appendChild(deletetask);
}
function deleteitem(event) {
  event.target.parentelement.remove();
}
listitem.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
    }
  },
  false
);
