// Loops

// 1. For Loop

// 1.1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1.2
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 1.3

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// 2. While Loop

let i = 1;
let sum = 0;

while (i <= 10) {
  console.log((sum += i));
  i++;
}

// 1.4 Nested for Loop

for (let i = 0; i <= 5; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 3. Do...while Loop
