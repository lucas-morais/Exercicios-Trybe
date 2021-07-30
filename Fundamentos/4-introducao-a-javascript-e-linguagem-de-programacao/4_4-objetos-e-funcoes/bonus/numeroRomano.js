let tabela = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000, 
};

let teste = 'CMXLVII';


function transformaRomano(numero){
  let tamanho = numero.length;
  let resultado = tabela[numero[tamanho - 1]];
  for (let index = tamanho -2; index >= 0; index -=1 ){
    if (tabela[numero[index]] < tabela[numero[index + 1]]){
       resultado -= tabela[numero[index]];
    } else{
      resultado += tabela[numero[index]];
    }
  }
  return resultado;
}

console.log(transformaRomano(teste));