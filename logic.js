let fisrtOperand = 0;
let secondOperand = 0;
let actionFlag = false;
let addFlag = false;
let divideFlag = false;
let multiplyFlag = false;
let minusFlag = false;
let abc = "";
let wasDot = false;

function buttonDigits(digit) {
  if (digit === 10 && wasDot === false) {
    abc += ".";
    document.getElementById("outputLine").value = abc;
    wasDot = true;
  } else {
    abc += digit;
    document.getElementById("outputLine").value = abc;
  }
}

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
  actionFlag = false;
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
    divideFlag = false;
    result = fisrtOperand / secondOperand;
  }
  document.getElementById("outputLine").value = result;
  fisrtOperand = result;
}
