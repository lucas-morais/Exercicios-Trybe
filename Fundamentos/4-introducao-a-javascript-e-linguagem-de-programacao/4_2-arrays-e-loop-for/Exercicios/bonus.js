let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//1. 
numbersCrescente = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbersCrescente.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersCrescente[index] < numbersCrescente[secondIndex]) {
      let position = numbersCrescente[index];
      numbersCrescente[index] = numbersCrescente[secondIndex];
      numbersCrescente[secondIndex] = position;
    }
  }
}
console.log(numbersCrescente);

// 2.
numbersDecrescente = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbersCrescente.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersDecrescente[index] > numbersDecrescente[secondIndex]) {
      let position = numbersDecrescente[index];
      numbersDecrescente[index] = numbersDecrescente[secondIndex];
      numbersDecrescente[secondIndex] = position;
    }
  }
}
console.log(numbersDecrescente);


// 3.
let outroNumbers = [];
for (let indice = 0; indice < numbers.length; indice+=1){
  if (indice < numbers.length -1){
    outroNumbers.push(numbers[indice]*numbers[indice+1]);
  }
  else {
    outroNumbers.push(numbers[indice]*2);
  }
}

console.log(outroNumbers);