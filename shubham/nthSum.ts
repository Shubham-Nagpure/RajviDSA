// Accept the number from user and return the sum of 1 to n
// If number is negative then convert that number into positive
// Example: Input: 4
//	        Output: 10 // 1+2+3+4


function nthSum(nthNumber: number): number {
  let sum: number = 0;
  let positiveNumber: number = Math.abs(Math.trunc(nthNumber));

  while (positiveNumber > 0) {
    sum += positiveNumber--;
  }

  return sum;
}

console.log(nthSum(4)); // Output: 10
console.log(nthSum(-4)); // Output: 10
console.log(nthSum(0)); // Output: 0


function nthSumV2(nthNumber: number): number {
  if (!Number.isInteger(nthNumber)) {
    throw new Error("Input must be an integer.");
  }

  const positiveNumber: number = Math.abs(nthNumber);
  return (positiveNumber * (positiveNumber + 1)) / 2;
}

console.log(nthSumV2(4)); // Output: 10
console.log(nthSumV2(-4)); // Output: 10
