'use strict';

// 1. -------------------------------------------------------------------------------

let n = 20;

if (n > 0) {
  console.log("Skaičius: " + n + " yra \"geras\" skaičius.");
} else if (n <= 0) {
  console.log("Skaičius: " + n + " yra \"blogas\" skaičius.");
} 

// 2. -------------------------------------------------------------------------------

let n = 3;

if (n == 1) {
  console.log("Galite eiti!");
} else {
  console.log("Palaukite žalio signalo!");
}

// 3. -------------------------------------------------------------------------------

let d = 3;
let k = 18;
let n = 5;

if ((d * n) >= k) {
  console.log("Knygos telpa į dėžes.");
} else {
  console.log("Knygos netelpa į dėžes.");
};

// 4. -------------------------------------------------------------------------------

let a = 1;
let b = 2;

console.log("Prieš sąlygą:" + " a = " + a + " b = " + b);

if (a > b) {
  a--;
  b++;
} else if (a < b) {
  a++;
  b--;
};

console.log("Po sąlygos:" + " a = " + a + " b = " + b);

// 5. -------------------------------------------------------------------------------

let c = 50;
let p = 20;

let k = Math.floor(c / p);
let n = (c - (k * p));

console.log("Saulius nusipirks" + " " + Math.floor(k) + " " + "porcijas ledų." + " " + "Liks" + " " + n + " " + "centų." );

// 6. -------------------------------------------------------------------------------

let n = 6;
let x = (n % 3)

if (x === 0) {
  console.log("Trikampį sudėlioti galima.");
} else {
  console.log("Trikampio sudėlioti negalima.");
};

// 7. -------------------------------------------------------------------------------

const daysNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let n = 2;
let d = daysNum[n-=1];

console.log(d);

// 8. -------------------------------------------------------------------------------

let k = prompt("Įveskite iškritusį kauliuko skaičių (1-6)");

if (k == 1 || k == 3 || k == 5) {
  alert("Kambarį tvarkys JAUNĖLIS! haha")
} else if (k == 2 || k == 4 || k == 6) {
  alert("Kambarį tvarkys VYRESNĖLIS! haha")
}

// 9. -------------------------------------------------------------------------------

const olimpicYears = [];

for (let i = 1896; i <= 2022; i += 4) {
  olimpicYears.push(i);
}

let m = 1904;

let index = olimpicYears.indexOf(m);
let n = index += 1;

if (n > 0) {
  console.log(n);
} else {
  console.log("Metai ne olimpiniai.");
};

// 10. -------------------------------------------------------------------------------

let v1 = 8; 
let m1 = 29; 

let m2 = 43; 

let v = 9; 
let m = 5; 

let arriveTime = new Date();
arriveTime.setHours(v1, (m1 + m2), 0)

let startTime = new Date();
startTime.setHours(v, m, 0)

if (arriveTime < startTime) {
  console.log("Petras į pamoką nevėluos.");
} else {
  console.log("Petras į pamoką pavėluos.");
};
