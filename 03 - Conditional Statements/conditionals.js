// Conditional Operators / Control Structures

// Task 1: If-else statements

let number = -1;

if (number < 0) {
  console.log("Number " + number + " is negative.");
} else {
  console.log("Number " + number + " is positive.");
}

let age = 19;

if (age > 17) {
  console.log("Eligible to vote.");
} else {
  console.log("NOT eligible to vote.");
}

// Task 2: Nested if-else Statement

let a = 5,
  b = 8,
  c = 15;

if (a > b) {
  if (a > c) {
    console.log("The number a is the largest");
  } else {
    console.log("The number c is the largest.");
  }
} else {
  if (b > c) {
    console.log("The number b is the largest.");
  } else {
    console.log("The number c is the largest.");
  }
}

// Task 3: Switch Case/Statement

// 1
let dayNumber = 5;
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;

  default:
    dayName = "INVALID NUMBER!!! Please enter a number between 1 and 7.";
}

console.log(dayName);

// 2.

let obtainedMarks = 5;
let grade;

switch (true) {
  case obtainedMarks >= 8:
    grade = "A";
    break;
  case obtainedMarks >= 6 && obtainedMarks < 8:
    grade = "B";
    break;
  case obtainedMarks >= 4 && obtainedMarks < 6:
    grade = "C";
    break;
  case obtainedMarks >= 2 && obtainedMarks < 4:
    grade = "D";
    break;
  case obtainedMarks < 2:
    grade = "F";
    break;

  default:
    grade = "NO GRADE. Absent/Withdrawn from exam.";
    break;
}

console.log(grade);

// Task 4: Ternary Operator

let num = 21;
let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);
