import "./styles.css";
var color = ["green"];
var shape = ["triangle-bottomleft"];

var currShape = "square";

document.getElementById("shape").onclick = function () {
  var rand = shape[Math.floor(Math.random() * shape.length)];
  document.getElementById(currShape).setAttribute("id", rand);
  currShape = rand;
};

document.getElementById("color").onclick = function () {
  var rand = color[Math.floor(Math.random() * color.length)];
  document.getElementById("app").style.backgroundColor = rand;
};
