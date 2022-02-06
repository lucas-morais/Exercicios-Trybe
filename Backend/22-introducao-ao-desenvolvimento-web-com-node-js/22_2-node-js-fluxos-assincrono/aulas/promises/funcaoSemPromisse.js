function calcularDivisão(num1, num2) {
  if(num2===0)
    throw new Error('Não pode ser feita uma divisão por zero');
  return num1 / num2;
}


try {
  const resultado = calcularDivisão(2,1)
  console.log(resultado);
} catch(erro) {
  console.log(`Erro: ${erro.message}`);
}