let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.
for (let numero of numbers){
  console.log(numero);
}


// 2.
let soma = 0;
for (let numero of numbers){
  soma+=numero
}

console.log("Soma: " + soma);

// 3.
let media = soma/numbers.length;
console.log("Média: " + media);

// 4.
console.log(media > 20 ? 'Valor maior que 20': 'Valor menor ou igual a 20');

// 5.
let max = 0;
for (let numero of numbers){
  if (numero > max){
    max = numero;
  }
}
console.log("Valor máximo: " + max);

// 6.
let contaImpares = 0;
for (let numero of numbers){
  if ( (numero%2) == 1){
    contaImpares += 1;
  }
}

console.log(contaImpares>0 ? contaImpares:'nenhum valor ímpar encontrado');

// 7. 
let min = numbers[0];
for (let indice = 1; indice < numbers.length; indice+=1){
  if (numbers[indice] < min){
    min = numbers[indice];
  }
}
console.log("Valor mínimo: " + min);

// 8.
let arrayDeNumeros = [];
for( indice = 1; indice <= 25; indice+=1){
  arrayDeNumeros.push(indice);
} 
console.log(arrayDeNumeros);

// 9.
for (let numero of arrayDeNumeros){
  console.log(numero/2);
}