function quantosParametros(...args) {
  console.log('parâmetros: ', args);
  return `Você passou ${args.length} parâmetros para a função.`
}

console.log(quantosParametros(0, 1, 2));
console.log(quantosParametros('string', null, [1, 2, 3], { }));

const sum = (...args) => args.reduce((accumulator, curret) => accumulator + curret);
console.log(sum(4, 7, 8, 9, 60));

