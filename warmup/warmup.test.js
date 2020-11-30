const fizzBuzz = require("./warmup");

const correctSolution = (number) =>
  number % 15 ? (number % 5 ? (number % 3 ? number.toString() : "Fizz") : "Buzz") : "FizzBuzz";

test('fizzBuzz(1) --> "1"', () => {
  expect(fizzBuzz(1)).toBe("1");
});

test('fizzBuzz(3) --> "Fizz"', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('fizzBuzz(5) --> "Buzz"', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test('fizzBuzz(15) --> "FizzBuzz"', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("Testing first 100 numbers", () => {
  for (let i = 1; i <= 100; i++) {
    expect(fizzBuzz(i)).toBe(correctSolution(i));
  }
});
