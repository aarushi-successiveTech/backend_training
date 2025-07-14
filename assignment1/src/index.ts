import {add, sub, div, mult} from './lib/math';
import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first number :", (num1) => {
  rl.question("second number :", (num2) => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    const results = [
      { operation: "Addition", result: add(n1, n2) },
      { operation: "Subtraction", result: sub(n1, n2) },
      { operation: "Divide", result: div(n1, n2) },
      { operation: "Multiply", result: mult(n1, n2) },
    ];

    let content = "Operations, Num1, Num2, Result\n";
    results.forEach(({ operation, result }) => {
      content += `${operation}, ${n1}, ${n2}, ${result}\n`;
    });

    fs.writeFile("results.csv", content, (err) => {
      if (err) {
        console.log("error occured", err);
      } else {
        console.log("results saved");
      }
    });

    rl.close();
  });
});