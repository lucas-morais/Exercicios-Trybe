// 1.
const header = document.createElement('h1');
header.innerText = 'Exercício 5.2 - Javascript DOM';
const body = document.getElementsByTagName('body')[0]
body.appendChild(header);

// 2. 
const main = document.createElement('main');
main.className = 'main-content';
body.append(main);

// 3. 
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
main.appendChild(centerContent);

// 4.
const primeiroParagrafo = document.createElement('p');
primeiroParagrafo.innerText = 'Primeiro paragráfo da página';
centerContent.appendChild(primeiroParagrafo);

// 5.
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
main.appendChild(leftContent);

// 6.
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
main.appendChild(rightContent);

// 7.
const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
leftContent.appendChild(imagem); 

// 8.
let listaDeNumeros = [
  'um', 'dois', 'tres', 'quatro', 'cinco',
  'seis', 'sete', 'oito', 'nove', 'dez'
];

const lista = document.createElement('ul');
rightContent.appendChild(lista);
for (let index = 0; index < listaDeNumeros.length; index += 1){
  const item = document.createElement('li');
  item.innerText = listaDeNumeros[index];
  lista.appendChild(item);
}

// 9.
function insertAsFirsElement(parentElement, firstElement){
  const firstChild = parentElement.firstChild;
  parentElement.insertBefore(firstElement, firstChild);
}

const headCenter = document.createElement('h3');
headCenter.innerText = 'Título Centro';

const headLeft = document.createElement('h3');
headLeft.innerText = 'Título Esquerda';

const headRight = document.createElement('h3');
headRight.innerText = 'Título Direita';

insertAsFirsElement(centerContent, headCenter);
insertAsFirsElement(leftContent, headLeft);
insertAsFirsElement(rightContent, headRight);

// Alterações

// 1.
header.className = 'title';

// 2.
headCenter.className = 'description';
headLeft.className = 'description';
headRight.className = 'description';

// 3. 
main.removeChild(leftContent);

// 4.
rightContent.style.marginRight = 'auto';

// 5. 
centerContent.parentElement.style.backgroundColor = 'green';

// 6.
lista.removeChild(lista.lastChild);
lista.removeChild(lista.lastChild);
