const num = 1;
const validateNum = num ?? 5; // Este operador evalúa si el valor ingresado es null, en cuyo caso se asignará el valor a la derecha
console.log(validateNum);

const nums = null;
const validateNums = nums ?? 5;
console.log(validateNums);
