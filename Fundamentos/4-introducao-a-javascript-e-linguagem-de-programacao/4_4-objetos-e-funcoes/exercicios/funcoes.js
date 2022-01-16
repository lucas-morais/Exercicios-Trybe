// 1.
console.log("Exercício 1\n");

function verificaPalindromo(palavra){
  if(typeof palavra != 'string'){
    console.log("O parâemtro precisa ser do tipo string");
    return 1;
  }
  
  palavra=palavra.toLocaleLowerCase();
  let palavraReversa = palavra.split('').reverse().join('');
  return palavra==palavraReversa;
}

let palindromo = 'arara';
let naoPalindromo = 'desenvolvimento';

console.log('A palavra ' + palindromo + ' é um plaindromo? ' + verificaPalindromo(palindromo));
console.log('A palavra ' + naoPalindromo + ' é um plaindromo? ' + verificaPalindromo(naoPalindromo));

// 2.
console.log("\n\nExercício 2\n");

function maiorValor(arrayNumerico){
  
  let indiceMaiorValor = 0;
  for(let index = 1; index < arrayNumerico.length; index+=1){
    if (arrayNumerico[index] > arrayNumerico[indiceMaiorValor]){
      indiceMaiorValor = index;
    }
  } 

  return indiceMaiorValor;
}

let arrayTest = [2, 3, 16, 7, 10, 1];
console.log("Índice com maior valor: " + maiorValor(arrayTest));

// 3.
console.log("\n\nExercício 3\n");

function menorValor(arrayNumerico){
  
  let indiceMenorValor = 0;
  for(let index = 1; index < arrayNumerico.length; index+=1){
    if (arrayNumerico[index] < arrayNumerico[indiceMenorValor]){
      indiceMenorValor = index;
    }
  } 

  return indiceMenorValor;
}

let arrayTest2 = [2, 4, 6, -7, 10, 0, -3];
console.log("Índice com menor valor: " + menorValor(arrayTest2));



// 4.
console.log("\n\nExercício 4\n");

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes){
  
  let maiorNome = nomes[0];
  for(let index = 1; index < nomes.length; index+=1){
    if (nomes[index].length > maiorNome.length){
      maiorNome = nomes[index];
    }
  } 
  return maiorNome;
}

console.log("Maior nome: " + maiorNome(arrayNomes));


// 5.
console.log("\n\nExercício 5\n");


let arrayNumeros = [2, 3, 2, 5, 8, 2, 3, 3, 3];

function contaNumeros (numeros){
  
  let contador={};  
  
  for (numero of numeros){
    if(numero in contador){
      contador[numero] += 1;
    }
    else{
      contador[numero] = 1;
    }
  }
  let chaves = Object.keys(contador);
  
  let indexPrincipal = chaves[0];
  let maisOcorrencias = contador[chaves[0]];
  for(let index = 1; index < chaves.length; index +=1 ) {
    if (contador[chaves[index]] > maisOcorrencias){
      indexPrincipal = chaves[index];
    }
  }

  return indexPrincipal;
}

console.log("Número com mais ocorrências: " + contaNumeros(arrayNumeros));


// 6.
console.log("\n\nExercício 6\n");


function somatorio(n){
  soma = 0;
  for(let i = 1 ; i <= n; i +=1 ){
    soma += i;
  }
  return soma;
}

let teste = 5;
console.log('Somatório N = ' + teste + ': ' + somatorio(teste));

// 7.
console.log("\n\nExercício 7\n");

function verificaFimPalavra(palavra, final){
  return palavra.endsWith(final);
}

let palavra1 = 'trybe';
let teste1 = 'be';
let teste2 = 'ryb';

console.log(palavra1 + ' termina com ' + teste1 + '? ' + verificaFimPalavra(palavra1, teste1));
console.log(palavra1 + ' termina com ' + teste2 + '? ' + verificaFimPalavra(palavra1, teste2));


