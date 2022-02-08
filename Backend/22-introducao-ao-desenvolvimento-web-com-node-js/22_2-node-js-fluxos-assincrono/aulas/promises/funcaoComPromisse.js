function calcularDivisão(num1, num2) {
  
  const promise = new Promise((resolve, reject) =>{
    if(num2===0)
      reject(new Error('Não é possível dividir o número por zero'))
  
      const resultado = num1 / num2;

      resolve(resultado);
  
  });

  return promise;
}


calcularDivisão(2,1)
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro.message))