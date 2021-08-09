function modificaParargrafo() {
  const paragrafo = document.getElementsByTagName('p');
  paragrafo[1].innerText = 'Emprego em web development';
}

function modificaQuadradoAmareloParaVerde() {
  const conteudoPrincipal = document.querySelector('.main-content');
  conteudoPrincipal.style.backgroundColor = 'rgb(76,164,109)';
}

function modificaQuadradoVermelhoParaBranco() {
  const conteudoCentral = document.querySelector('.center-content');
  conteudoCentral.style.backgroundColor = 'white';
}

function consertaTitulo() {
  const titulo = document.querySelector('.title');
  titulo.innerText = 'Exercício 5.1 - Javascript';
}

function modificaParaMaiuscula() {
  const paragrafo = document.getElementsByTagName('p');
  paragrafo[0].innerText = paragrafo[0].innerText.toLocaleUpperCase();
}

function exibeTagPNoConsole() {
  const paragrafo = document.getElementsByTagName('p');
  for (let index = 0; index < paragrafo.length; index += 1){
    console.log(paragrafo[index].innerText);
  }  
}
modificaParargrafo();
modificaQuadradoAmareloParaVerde();
modificaQuadradoVermelhoParaBranco();
consertaTitulo();
modificaParaMaiuscula();
exibeTagPNoConsole();