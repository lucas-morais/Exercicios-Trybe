const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Elemento adicionado via script';

// Irmão para 'elementoOndeVoceEsta'
let pai = document.getElementById('pai');
pai.appendChild(novoParagrafo);

// filho para 'elementoOndeVoceEsta'
let filhoOndeVoceEsta = document.createElement('p');
filhoOndeVoceEsta.innerText = 'filho de elementoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
filhoDoPrimeiroFilhoDoFilho.innerText = 'filho de primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// Acessando terceiroFilho a partir de filho do 'primeiroFilhoDoFilho'
let elemntoFilho = document.querySelector('#primeiroFilhoDoFilho p');
console.log(elemntoFilho.parentElement.parentElement.nextElementSibling);


