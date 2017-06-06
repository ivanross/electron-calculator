
const $ = require('jquery')


var typingStarted = false;
var operation
var operationSelected = false; // quando premo '=' non ho selez un operatore. Dovrò invertire operandi
var numberSaved = 0;

function clearPressed() {
  console.log("Cleared");
  if ($("#clear").text() == "C") {
    $("#display").text("0")
    typingStarted = false
    $("#clear").text("AC")
  } else if ($("#clear").text() == "AC") {
    $("#display").text("0")
    typingStarted = false
    operation = undefined
    operationSelected = false;
    numberSaved = 0;
  }
}

function numberPressed(n) {
  if (typingStarted) {
      $("#display").append(n)
  } else {
    if (n != 0) typingStarted = true;
    $("#display").text(n);
    $("#clear").text("C");
  }
  console.log("Pressed: "+n);
}

function commaSelected() {
  if ($("#display").text().indexOf('.') < 0) {
    $("#display").append(".");
    typingStarted = true;
  }
}

function operatorPressed(op) {
  if (operationSelected) resultPressed()
  operation = op
  typingStarted = false;
  numberSaved = $("#display").text();
  operationSelected = true;
}



function calculate(num1,num2) {
  if(typeof num1 != 'number') num1 = parseFloat(num1);
  if(typeof num2 != 'number') num2 = parseFloat(num2);

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}

function resultPressed() {

  var res
  if (operationSelected) {
    res = calculate(numberSaved,$("#display").text())
    numberSaved = $("#display").text()
  } else {
    res = calculate($("#display").text(),numberSaved)
  }
  operationSelected = false;
  $("#display").text(res);
  typingStarted = false;
}

function swapSignPressed() {
  if ($("#display").text() != "0") {
    if ($("#display").text().indexOf('-') < 0)   $("#display").text("-"+$("#display").text());
    else $("#display").text($("#display").text().substring(1));
  }
}
