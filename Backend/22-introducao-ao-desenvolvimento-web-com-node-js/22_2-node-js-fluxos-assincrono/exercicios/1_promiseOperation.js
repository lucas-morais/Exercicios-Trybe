function promiseOperation(a, b, c) {
  return new Promise((resolve, reject) => {
    if ((typeof a !== 'number') || (typeof b !== 'number') || (typeof c !== 'number')) 
      return reject('Informe apenas números')
    
    const resultado = (a + b) *c
    return resultado < 50 ? reject("Valor muito baixo") : resolve(resultado);    
  })
}

module.exports = promiseOperation;
