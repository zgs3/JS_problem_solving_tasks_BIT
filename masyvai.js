'use strict';

// 1. -------------------------------------------------------------------------------

const myArray = [];

for (let i = 1; i <= 20; i++) {
  myArray.push(i);
}
console.log(myArray);

// 2. -------------------------------------------------------------------------------


function rand(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

const myArray = [];

for (let i = 1, n = rand(40, 60); i <= n; i++) {
  myArray.push(i);
};

console.log(myArray);

// 3. -------------------------------------------------------------------------------

function rand (min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const myArray = [];

for (let i = 1, n = rand(10, 15); i <= n; i++) {
  myArray.push(rand(5, 47));
}

function max(...someArray) {
  return someArray.reduce((first, second) => second > first ? second : first)
}

console.log(myArray);
console.log(max(...myArray));

// 4. -------------------------------------------------------------------------------

let letters = "MNOP"
const myArray = [];

for (let i = 0; i < 100; i++) {
  myArray.push(letters[Math.floor(Math.random() * letters.length)]);
};

console.log(myArray);

// 5. -------------------------------------------------------------------------------

const myArray = [];

let letters = "MNOP"

let count = {
  M: 0,
  N: 0,
  O: 0,
  P: 0
};

for (let i = 0; i < 100; i++) {
  myArray.push(letters[Math.floor(Math.random() * letters.length)]);
};

myArray.map(function(s) {
  if (s == "M") {
    count.M +=1;
  }
  if (s == "N") {
    count.N +=1;
  }
  if (s == "O") {
    count.O +=1;
  }
  if (s == "P") {
    count.P +=1;
  }
});

let values = Object.values(count);

console.log(Math.max(...values));

// 6. -------------------------------------------------------------------------------

function rand (min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

let myArray = [];

while (myArray.length < 20) {
  let someNumber = rand(10,50);
  if (myArray.indexOf(someNumber) === -1) {
    myArray.push(someNumber)
  }
};

console.log(myArray);
