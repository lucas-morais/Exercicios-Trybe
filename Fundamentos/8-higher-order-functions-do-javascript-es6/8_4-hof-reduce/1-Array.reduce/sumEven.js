const numbers = [19, 18, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (result, number) => !(number % 2) ? result + number : result;

const sum = numbers.reduce(sumEven, 0);
console.log(sum);