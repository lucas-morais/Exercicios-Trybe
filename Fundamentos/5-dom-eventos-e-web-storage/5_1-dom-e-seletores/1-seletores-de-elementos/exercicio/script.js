const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

const title = document.getElementById('page-title');
title.innerText = 'De Volta para o Fututro';

const secondParagraph = document.getElementById('second-paragraph');

secondParagraph.innerHTML = 'Meu segundo parágrafo';
secondParagraph.style.textAlign = 'center';

const subtitle = document.getElementById('subtitle');
subtitle.style.backgroundColor = 'dodgerblue';

const classeParagrafo = document.getElementsByClassName('paragrafo');
for (let i = 0; i < classeParagrafo.length; i += 1) {
  classeParagrafo[i].innerText = 'Outro texto';
  console.log(classeParagrafo[i]);
}

const subitileByTag = document.getElementsByTagName('h4');
subitileByTag[0].style.color = 'white';
