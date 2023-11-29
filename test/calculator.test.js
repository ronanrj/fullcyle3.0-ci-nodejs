// calculator.test.js

const calculator = require('../src/calculator');

test('Soma 1 + 2 deve ser igual a 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtração 5 - 3 deve ser igual a 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('Multiplicação 4 * 2 deve ser igual a 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Divisão 10 / 2 deve ser igual a 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Divisão por zero deve retornar uma mensagem de erro', () => {
  expect(calculator.divide(8, 0)).toBe('Não é possível dividir por zero');
});
