const primeiraDiv = document.querySelector('div');
console.log(primeiraDiv);

const todasDivs = document.querySelectorAll('div');
console.log(todasDivs);

const paragrafos = document.querySelectorAll('p');
paragrafos[0].innerText = 'Ayrton Lenda';

const pilotosAtuais = document.querySelectorAll('.piloto-f1-atual');
for (let i = 0; i < pilotosAtuais.length; i += 1){
  console.log(pilotosAtuais[i].innerText);
}

const pilotosSemtituloAtuais = document.querySelectorAll('.pilotos-sem-titulo .piloto-f1-atual');
for (let i = 0; i < pilotosSemtituloAtuais.length; i += 1){
  console.log(pilotosSemtituloAtuais[i].innerText);
}