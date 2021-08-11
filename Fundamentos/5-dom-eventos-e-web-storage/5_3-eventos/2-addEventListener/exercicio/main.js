const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1.Copie esse arquivo e edite apenas ele;
 
2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?
 

5.Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/


// 2.

secondLi.addEventListener('click', modificaClasseParaTech) 

function modificaClasseParaTech(evento){
  const classTech = document.getElementsByClassName('tech');
  for (let element of classTech) {
    element.classList.remove('tech');
  }
  evento.target.className = 'tech';
}

// 3.
input.addEventListener('keyup', modificaTexto)

function modificaTexto(evento){
  const texto = evento.target.value;
  secondLi.innerText = texto;
}


// 4.
myWebpage.addEventListener('dblclick', redireciona);

function redireciona() {
  window.location.href = 'https://lucas-morais.github.io';
}

// 5.
myWebpage.addEventListener('mouseover', mouseEmCima);
myWebpage.addEventListener('mouseleave', mouseSaindo);

function mouseEmCima(evento){
  evento.target.style.color = 'dodgerblue';
}

function mouseSaindo(evento){
  evento.target.style.color = 'white';
}


