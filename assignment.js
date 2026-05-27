

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

function modulo(n, p) {
  return ((n % p) + p) % p;
}

export function cipher(msg, key) {
  var encMsg = "";
  for(var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      code = modulo(code - 65 + key, 26) + 65;
    } 
    else if (code >= 97 && code <= 122) {
    code = modulo(code - 97 + key, 26) + 97;
    }
    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

export function analyze(...numbers) {
  const arr = numbers;
  return {
    average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}