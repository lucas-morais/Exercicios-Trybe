const readline = require('readline-sync');

// console.log('Hello, World!');

const name = readline.question('Qual seu nome? ');
const age = readline.question('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} yars old!`)