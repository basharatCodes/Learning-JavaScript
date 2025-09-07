// Task 1 : Arthmetic Operations

let firstNum = 5;
let secondNum = 2;
let sum = firstNum + secondNum;
let subtract = firstNum - secondNum;
let multiply = firstNum * secondNum;
let divide = firstNum / secondNum;
let remainder = firstNum % secondNum;

console.log(
  "Sum:",
  sum,
  "Subtraction:",
  subtract,
  "Multiplication:",
  multiply,
  "Division:",
  divide,
  "Remainder:",
  remainder
);

// Task 2 : += and -= Operators

let primaryNum = 5;
let secondaryNum = 4;
let extraNum = (primaryNum += 1);

console.log("Using += Operator to get:", extraNum);

let newNum = (secondaryNum -= 40);

console.log("Using -= Operator to get:", newNum);

// Task 3: Comparison Operators

let num1 = 3;
let num2 = 5;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);

// Task 4: Logical Operators & Ternary Operator

let n1 = 4;
let n2 = 8;

console.log("n1 && n2: ", n1 < n2 && n1 == n2);
console.log("n1 && n2: ", n1 < n2 || n1 == n2);
console.log("n1 && n2: ", !(n1 > n2));

let age = 16;
let result = age >= 17 ? "Adult" : "Teenager";
console.log(result);
