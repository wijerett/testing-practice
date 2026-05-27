

export function capitalize() {
  const lower = "hello odinites";
  const capital = lower.charAt(0).toUpperCase() + lower.slice(1);
  return capital;
};


export function reverse() {
  const forward = "hello odinites";
  const backward = forward.split("").reverse().join("");
  return backward;
}

export function calculator(a, b) {
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
};


//take input letter convert to integer, add amount, then convert back
//to letter

const alphabet = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26
}

function convertToI() {
  
}


export function cipher() {
  
}