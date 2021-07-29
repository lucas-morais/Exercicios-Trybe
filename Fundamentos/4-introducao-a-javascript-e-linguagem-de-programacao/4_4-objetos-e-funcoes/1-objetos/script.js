let name = 'Milton';
let lastName = 'Nascimento';
let nickname = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

let singer = {
  firstName: 'Milton',
  lastName: 'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  bornInfo: {
    city:'Rio de Janeiro',
    estado: 'Rio de Janeiro'
  }
};

console.log(singer);
console.log('O cantor ' + singer.firstName + ' ' + singer.lastName + ' possui ' + singer.age + ' anos ');
console.log('O cantor ' + singer['firstName'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos ');

singer['fullName'] = 'Milton Nascimento';

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.estado );