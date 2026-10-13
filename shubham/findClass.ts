// QUESTION
// Design function where we will enter the percentage and will return the class for those percentage
// >70 First class with distinction
// >60 First class
// >50 Second class
// >35 Pass class
// Others Fail

type Grade = 'Fail' | 'Pass' | 'Second Class' | 'First Class' | 'First Class with Distinction' | 'Invalid Percentage';


 function findClassV2(percentage: number): Grade {
  if (!Number.isFinite(percentage)) {
    throw new Error('Invalid percentage');
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100');
  }

  if(percentage > 70) return 'First Class with Distinction';
  if(percentage > 60) return 'First Class';
  if(percentage > 50) return 'Second Class';
  if(percentage > 35) return 'Pass';
  return 'Fail';
}

function findClassV1(percentage: number): string {
  if (percentage >=0 && percentage <= 35) {
    return 'Fail';
  } else if (percentage > 35 && percentage <=50) {
    return 'Pass';
  } else if (percentage >50 && percentage <= 60) {
    return 'Second Class';
  } else if (percentage > 60 && percentage <=70) {
    return 'First Class';
  } else if (percentage > 70 && percentage <=100) {
    return 'First Class with Distinction';
  } else {
    return 'enter valid percentage';
  }
}

const classResult1: string = findClassV1(30);
const classResult2: string = findClassV1(35);
const classResult3: string = findClassV1(50);
const classResult4: string = findClassV1(60);
const classResult5: string = findClassV1(70);
const classResult6: string = findClassV1(100);

try {
  console.log(findClassV2(105));
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message); 
  }
}

console.log(`The class result for 30% is: ${classResult1}`);
console.log(`The class result for 35% is: ${classResult2}`);
console.log(`The class result for 50% is: ${classResult3}`);
console.log(`The class result for 60% is: ${classResult4}`);
console.log(`The class result for 70% is: ${classResult5}`);
console.log(`The class result for 100% is: ${classResult6}`);
