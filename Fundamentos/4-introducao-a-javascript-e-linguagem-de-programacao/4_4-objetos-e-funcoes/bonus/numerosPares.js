let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (vetores) {

  let numerosPares =[];
  for(let vetor of vetores){
    for (let numero of vetor){
      if( numero%2 == 0){
        numerosPares.push(numero);
      }   
    }
  }

  return numerosPares;
}

console.log("Vetor de números pares: " + arrayOfNumbers(vector));