import { capitalize } from "./assignment.js";
import { reverse } from "./assignment.js";
import { calculator } from "./assignment.js";
import { cipher } from "./assignment.js";
import { analyze } from "./assignment.js";


const capital = capitalize();
const backward = reverse();


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

test('analyze array', () => {
  const result = analyze(1,8,3,4,2,6);
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
})