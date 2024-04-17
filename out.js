"use strict";

// build/addNumbers.js
var addNumbers = (firstNumber2, secondNumber2) => {
  return firstNumber2 + secondNumber2;
};
var addNumbers_default = addNumbers;

// build/index.js
var firstNumber = 2;
var secondNumber = 3;
var result = addNumbers_default(firstNumber, secondNumber);
console.log(`Adding ${firstNumber} to ${secondNumber} gives ${result}.`);
