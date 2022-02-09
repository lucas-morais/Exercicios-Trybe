module.exports = (numero) => {
  if(typeof numero !== 'number')
    throw new TypeError('Valor de entrada deve ser do tipo "number"');
  if (numero > 0) return 'positivo';
  else if (numero < 0) return 'negativo';
  return 'neutro';
};
