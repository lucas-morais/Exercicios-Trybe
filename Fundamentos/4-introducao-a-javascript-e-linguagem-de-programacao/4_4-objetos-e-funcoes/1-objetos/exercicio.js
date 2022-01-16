// 1.

let player = {
  firstName: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' tem ' + player.age + ' anos.');

// 3.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];


// 4.
let mensagem = 'A jogador ' + player.firstName + ' ' + player.lastName + ' '; 

console.log(mensagem + 'foi eleita melhor do munodo ' + player.bestInTheWorld.length + ' vezes.');


// 5.
console.log( mensagem + 'possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');