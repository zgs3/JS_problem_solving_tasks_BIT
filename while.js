'use strict';

// 1. -------------------------------------------------------------------------------

function rand(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

const numbersArr = [];

let i = 1;
while (i !== 0) {
  numbersArr.push(rand(1, 10));
  var sum = numbersArr.reduce(function(a, b) { return a + b; });
  i++;
  if (sum > 90 && sum < 100) { 
    break;
  }
}

console.log(numbersArr);
console.log(sum);

// 2. -------------------------------------------------------------------------------

function rand(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const numbersArr = [];

let i = 1;
while (i !== 0) {
  numbersArr.push(rand(1, 10));
  var sum = numbersArr.reduce(function(a, b) { return a + b; });
  i++;
  if ((sum % 7) == 0) { 
    break;
  }
}

console.log(numbersArr);
console.log(sum);

// 3. -------------------------------------------------------------------------------

let m = 17; 
let days = [];
let x = 1; 

let i = 0; 
while (i < m) {
  days.push(x++);
  var sum = days.reduce(function(a, b) { return a + b; });
  i++;
  if (sum > m) {
    break;
  }
}
console.log(x);

let s = m / days.length;
let d = days.length;

console.log(d + " Dienos");
console.log(s.toFixed(2) + " Skyriai per dieną.");

// 4. -------------------------------------------------------------------------------

function rand(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

let i = 0;
while (i !== 5) {
  i = rand(0, 10);
  console.log(i);
}

// 5. -------------------------------------------------------------------------------

function rand(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

let x = 0;
let i = 0;
while (i !== 5 && i !== 7) {
  i = rand(0, 10);
  console.log(i);
  x++;
}

console.log("Prasuko" + " " + x + " " + "kartus/ų.");
