let numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

const sum = numbers.reduce((result, number) => result + number);
console.log(sum);

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

numbers = [32, 15, 3, 2, -5, 56, 10];

const getSumWithOffset = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };

sumNumbers = numbers.reduce(getSumWithOffset, 10);
console.log(sumNumbers); // 123