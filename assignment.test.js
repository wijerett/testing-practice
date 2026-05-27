import { capitalize } from "./assignment.js";
import { reverse } from "./assignment.js";
import { calculator } from "./assignment.js";
import { cipher } from "./assignment.js";



const capital = capitalize();
const backward = reverse();
//const caesar = cipher();

test('is capital', () => {
  expect(capital).toMatch('Hello odinites');
});

test('is backward', () => {
  expect(backward).toMatch('setinido olleh');
});

test('adds, subtracts, multiplies or divides', () => {
  const result = calculator(10, 2);
  expect(result.add).toBe(12);
  expect(result.subtract).toBe(8);
  expect(result.multiply).toBe(20);
  expect(result.divide).toBe(5);
});

test('deciphered message', () => {
  const result = cipher('HeLLo', 3)
  expect(result).toMatch('KhOOr');
});