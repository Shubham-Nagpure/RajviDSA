// Accept the number from user and display that number 5 times

const REPEAT_COUNT = 5;

function repeatFiveTimes(value: number): void {
  let counter: number = 0;

  while (counter < REPEAT_COUNT) {
    console.log(value);
    counter++;
  }
}

// V2: same thing with a for loop, and the count made a parameter
function repeatNTimes(value: number, times: number = REPEAT_COUNT): void {
  for (let i = 0; i < times; i++) {
    console.log(value);
  }
}

repeatFiveTimes(5);
repeatFiveTimes(7);
repeatNTimes(3);
repeatNTimes(9, 2);
