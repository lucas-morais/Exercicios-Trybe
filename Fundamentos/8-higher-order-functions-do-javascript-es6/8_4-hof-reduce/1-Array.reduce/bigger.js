const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(bigger)
  return (bigger > number) ? bigger: number;
}
const bigger = numbers.reduce(getBigger);

console.log(bigger);

const biggerWithOffset = numbers.reduce(getBigger, 100);
console.log(biggerWithOffset);