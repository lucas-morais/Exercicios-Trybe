// Acessando elemento 'elementoOndeVoceEsta'
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

// Adicionando cor ao elemento 'pai' a partir de 'elementoOndeVoceEsta'
ondeVoceEsta.parentElement.style.backgroundColor = 'dodgerblue';

// Acessando elemento 'primeiroFilho' e adicinando texto
const primeiroFilho = document.getElementById('primeiroFilho');
console.log(primeiroFilho);
primeiroFilho.innerText = 'Primeiro Filho';

// Acessando 'primeiroFilho' a partir de 'pai'
const pai= document.getElementById('pai');
console.log(pai.firstElementChild);

// Acessando 'primeiroFilho' a partir de 'elementoOndeVoceEsta'
console.log(ondeVoceEsta.previousElementSibling);

// Acessando o texto 'Atenção!' a partir de 'elementoOndeVoceEsta'
console.log(ondeVoceEsta.nextSibling);

// Acessando 'terceiroFilho' a partir de 'elementoOndeVoceEsta'
console.log(ondeVoceEsta.nextElementSibling);

// Acessando 'terceiroFilho' a partir de 'pai'
console.log(pai.children[2]);