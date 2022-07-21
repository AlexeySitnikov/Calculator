let fisrtOperand = 0;
let secondOperand = 0;
let addFlag = false;
let divideFlag = false;
let multiplyFlag = false;
let minusFlag = false;
let abc = "";
let wasDot = false;

function buttonOperation(operation) {
  fisrtOperand = Number(document.getElementById("outputLine").value);
  abc = "";
  wasDot = false;
  if (operation === "+") {
    addFlag = true;
  } else if (operation === "-") {
    minusFlag = true;
  } else if (operation === "*") {
    multiplyFlag = true;
  } else if (operation === "/") {
    divideFlag = true;
  }
}

function buttonErase() {
  fisrtOperand = 0;
  secondOperand = 0;
  addFlag = false;
  divideFlag = false;
  multiplyFlag = false;
  minusFlag = false;
  document.getElementById("outputLine").value = "0";
  abc = "";
  wasDot = false;
}

function buttonEqual() {
  secondOperand = Number(abc);
  let result = Number(0);
  if (addFlag === true) {
    addFlag = false;
    result = fisrtOperand + secondOperand;
  } else if (minusFlag === true) {
    minusFlag = false;
    result = fisrtOperand - secondOperand;
  } else if (multiplyFlag === true) {
    multiplyFlag = false;
    result = fisrtOperand * secondOperand;
  } else if (divideFlag === true) {
    if (secondOperand !== 0){
      divideFlag = false;
      result = fisrtOperand / secondOperand;
    } else {
      alert("Division by zero!");
      buttonErase();
      return;      
    }
    
  }
  document.getElementById("outputLine").value = result;
  fisrtOperand = result;
}

document.querySelector(".buttons").addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  let buttonValue = event.target.innerText;
  if (buttonValue === "." && wasDot !== true) {
    abc += ".";
    document.getElementById("outputLine").value = abc;
    wasDot = true;
  } else if (
    buttonValue === "1" ||
    buttonValue === "2" ||
    buttonValue === "3" ||
    buttonValue === "4" ||
    buttonValue === "5" ||
    buttonValue === "6" ||
    buttonValue === "7" ||
    buttonValue === "8" ||
    buttonValue === "9" ||
    buttonValue === "0"
  ) {
    abc += buttonValue;
    document.getElementById("outputLine").value = abc;
  } else if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/"
  ) {
    buttonOperation(buttonValue);
  } else if (buttonValue === "=") {
    buttonEqual();
  } else if (buttonValue === "Erase") {
    buttonErase();
  }
}
