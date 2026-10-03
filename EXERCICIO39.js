let A = true;
let B = true;
let C = false;

let resultadoA = (A && B) || (A !== B);

let resultadoB = (A || B) && (A && C);

let resultadoC = A || (C && (B !== A) && !B);

console.log("a)", resultadoA);
console.log("b)", resultadoB);
console.log("c)", resultadoC);