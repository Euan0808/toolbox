//on click
const clickFunc = () =>
  (document.getElementById("clickId").innerHTML = "hello");

// on mouse move
const hoverFunc = () =>
  (document.getElementById("hoverId").innerHTML = "hello");

// Click to count
let num = 0;
function addNum() {
  document.getElementById("add").innerHTML = num;
  num++;
}

// Click to add
let numOne = 0;
let numTwo = 0;
function addNumFuncOne() {
  numOne++;
  document.getElementById("output").innerHTML = numOne + numTwo;
}
function addNumFuncTen() {
  numTwo = numTwo + 10;
  document.getElementById("output").innerHTML = numOne + numTwo;
}

// on mouse hover
const overFunc = () => (document.getElementById("overId").innerHTML = "hello");
const leaveFunc = () =>
  (document.getElementById("overId").innerHTML = "mouse hover");
