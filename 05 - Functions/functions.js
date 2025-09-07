// Functions

// 1.1 Even or Odd
function evenOrOdd() {
  for (let i = 0; i <= 30; i++)
    if (i % 2 === 0) {
      console.log(`The number ${i} is Even.`);
    } else {
      console.log(`The number ${i} is odd.`);
    }
}

evenOrOdd();

// 1.2 Even only

function evenNum() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) console.log(`The Number ${i} is ODD.`);
  }
}
evenNum();

// 1.3 Square of a number

function squareOfaNum(num) {
  let result = num ** 2;
  console.log(`The Square of ${num} is ${result}`);
}

squareOfaNum(11);
