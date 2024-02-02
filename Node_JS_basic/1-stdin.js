// A function that takes in a message and displays it on the console.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?\n');

rl.question('', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing\n');
});
