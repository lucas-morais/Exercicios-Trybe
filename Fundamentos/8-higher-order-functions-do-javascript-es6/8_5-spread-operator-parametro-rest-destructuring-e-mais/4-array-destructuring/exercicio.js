const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); 

const[saudacao, funcSaudacao] = saudacoes;
funcSaudacao(saudacao);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida);

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);


let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); 

[, , , ...numerosPares] = numerosPares;
console.log(numerosPares);

