function fizzBuzz(numero) {
  return new Promise((resolve, reject) => {
    let res = '';
    if(numero % 3 === 0)
      res = res.concat('Fizz');
    if(numero %5 === 0)
      res = res.concat('Buzz');
    return res ? resolve(res) : reject(numero)
  })
}

fizzBuzz(25)
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(` ${error} não é divisível por 3 ou 5`);
  });