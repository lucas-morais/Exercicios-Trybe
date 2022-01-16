let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoVolante = 0;

function ligarDesligar(){
  if(statusCarro === 'desligado'){
    console.log('ligado');
  }
  else{
    console.log('desligado');
  }

  return statusCarro
}

function acelerar(incremento){
  aceleracao += incremento;
  
  console.log('Acelerando a ' + aceleracao + ' m/s'); 
}

function frear(decremento){
  aceleracao -= decremento;
  
  console.log('Desacelerando para ' + aceleracao + ' m/s'); 
}

function girarVolante(anguloRotacao){
  rotacaoVolante = anguloRotacao;

  console.log(rotacaoVolante + '°');
}

ligarDesligar();
acelerar(20);
girarVolante(-45);
frear(15);
