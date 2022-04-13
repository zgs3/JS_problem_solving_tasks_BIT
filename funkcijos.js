'use strict';

// 1. -------------------------------------------------------------------------------

function adding(a, b) {
  return a + b;
};

let arrowAdding = (a, b) =>  a + b;

// 2. -------------------------------------------------------------------------------

function myFunction(a, b) {
    if (a > b) {
      console.log(a + " yra didesnis");
    } else if (a < b) {
      console.log(b + " yra didesnis");
    } else {
      console.log(a + " ir " + b + " yra lygūs");
    }
  };

// 3. -------------------------------------------------------------------------------

function yearChecker(i) {
    if (i % 4 === 0 && i % 100 !== 0) {
      console.log("Metai " + i + " yra keliamieji.");
    } else if (i % 100 === 0 && i % 400 === 0) {
      console.log("Metai " + i + " yra keliamieji.");
    } else {
      console.log("Metai " + i + " nėra keliamieji.");
    }
  };

yearChecker(1252)

// 4. -------------------------------------------------------------------------------

let myFunction = (a) =>  a * a;

// 5. -------------------------------------------------------------------------------

let i = 0;
let counting = 0;

function myFunction(x) {
  while (x >= i) {
      counting += i;
      i++;
    }
    return counting;
  }
    
console.log(myFunction(5));
    
// 6. -------------------------------------------------------------------------------

let z = 16;
let y = z - 1;
let count = 0;

function myFunction(x) {
  for (; y > 1; y--)
  if (x % y == 0) {
    count += 1;
  }
  console.log(count);
 };

myFunction(z)

// 7. -------------------------------------------------------------------------------

function myFunction(txt) {
  if (typeof txt == "string") {
    console.log("Tekstas \"" + txt + "\"" + " yra sudarytas iš " + txt.length + " simbolių.");
  } else {
    console.log("Įveskite tekstą");
  }
}

let x = "blah blah blah";
let y = 9;

myFunction(x);

// 8. -------------------------------------------------------------------------------

const myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const telefonoNumeris = (myArray = []) => {
     let res = '';
     myArray = myArray.map(String);
     res += `(${myArray[0]+myArray[1]+myArray[2]}) `;
     res += `${myArray[3] + myArray[4] + myArray[5]}-`;
     res += myArray[6] + myArray[7] + myArray[8] + myArray[9];
     return res;
  };
  console.log(telefonoNumeris(myArray));
  
// 9. -------------------------------------------------------------------------------

function myFunction(a, b) {
  if (typeof a == "string" && typeof b == "string") {
    if (a.length > b.length) {
      console.log("Tekstas " + "\"" + a + "\"" + " yra ilgesnis.");
    } else {
      console.log("Tekstas " + "\"" + b + "\"" + " yra ilgesnis.");
    }
  } else {
    console.log("Įveskite tekstą");
  }
};
        
let x = "blah blah";
let y = "blah blah blah";

myFunction(x, y);
               
// 10. -------------------------------------------------------------------------------


function myFunction(txt) {
  let sum = 0;
  if (typeof txt == "string") {
    txt.split("").forEach(function(s) {
      if (s == letterToFind) {
        sum++;
      }
    });
    console.log(sum);
  } else if (typeof txt !== "string"){
    console.log("Įveskite tekstą");
  }
};

let someText = "blah blah";
let letterToFind = "a"

myFunction(someText);
