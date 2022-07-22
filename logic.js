let fisrtOperand = 0;
let secondOperand = 0;
let firstOperation = "";
let abc = "0";
let wasDot = false;

function buttonErase() {  
  document.getElementById("outputLine").value = "0";
  fisrtOperand = 0;
  secondOperand = 0;
  firstOperation = "";
  abc = "0";
  wasDot = false;
}

document.querySelector(".buttons").addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  let buttonValue = event.target.innerText;

  operand = getValue(buttonValue);
  operation = getOperation(buttonValue);

  if (operand !== false) {
    if (abc === "0") {
      if (operand === ".") {
        abc += operand;
      } else {
        abc = operand;
      }
    } else {
      abc += operand;
    }
    document.getElementById("outputLine").value = abc;
  } else if (operation !== false) {
    if (firstOperation === "") {
      firstOperation = operation;
      fisrtOperand = abc;
      wasDot = false;
      abc = "0";
    } else if (operation === "=") {
      secondOperand = abc;
      result = calculateValue();
      document.getElementById("outputLine").value = result;
      fisrtOperand = result;
      wasDot = false;
      abc = result;
      firstOperation = "";
    } else {
      secondOperand = abc;
      result = calculateValue();
      document.getElementById("outputLine").value = result;
      fisrtOperand = result;
      wasDot = false;
      abc = "0";
      firstOperation = operation;
    }
  } else if (buttonValue === "Erase"){
    buttonErase();
  }
}

function getValue(buttonValue) {
  if (
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
    return buttonValue;
  } else if (buttonValue === "." && wasDot !== true) {
    wasDot = true;
    return buttonValue;
  } else return false;
}

function getOperation(buttonValue) {
  if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/" ||
    buttonValue === "="
  ) {
    return buttonValue;
  } else return false;
}

function calculateValue() {
  let result = Number(0);
  if (firstOperation === "+") {
    result = Number(fisrtOperand) + Number(secondOperand);
  } else if (firstOperation === "-") {
    result = Number(fisrtOperand) - Number(secondOperand);
  } else if (firstOperation === "*") {
    result = Number(fisrtOperand) * Number(secondOperand);
  } else if (firstOperation === "/") {
    if (secondOperand !== 0) {
      result = Number(fisrtOperand) / Number(secondOperand);
    } else {
      alert("Division by zero!");
      buttonErase();
      return;
    }
  }
  return result;
}
