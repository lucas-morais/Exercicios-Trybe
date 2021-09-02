const raffle = (bet, callback) => {
  const number = Math.ceil(Math.random()*5);
  return callback(number, bet) ? 'Parabéns você ganhou!' : 'Tente novamente!';
}

const victory = (num1, num2) => num1 === num2; 

console.log(raffle(2, victory));