//Accept the two number from user and display larger number

function displayLarge(num1: number, num2: number): number {
  if(Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 > num2 ? num1 : num2;
  }
  throw new Error("Invalid input. Please provide finite numbers.");
}

function displayLargeV2 (num1: number, num2: number): number {
  if(Number.isFinite(num1) && Number.isFinite(num2)) {
    return Math.max(num1, num2);
  }
  throw new Error("Invalid input. Please provide finite numbers.");
}

const result: number = displayLarge(12, 32);

console.log("Large number between given number is " + result);
