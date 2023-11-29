// app.js

const calculator = require('./calculator');

console.log('Soma:', calculator.add(5, 3));
console.log('Subtração:', calculator.subtract(10, 4));
console.log('Multiplicação:', calculator.multiply(7, 2));
console.log('Divisão:', calculator.divide(20, 4));
console.log('Tentativa de divisão por zero:', calculator.divide(10, 0));
