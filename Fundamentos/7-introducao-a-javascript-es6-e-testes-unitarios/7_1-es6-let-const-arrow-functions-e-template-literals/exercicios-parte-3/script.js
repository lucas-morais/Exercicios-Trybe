const botao = document.getElementById('btn-contador');
botao.addEventListener('click', () => {
  const contador = document.getElementById('contador');
  let numeroDeClicks = contador.innerHTML.match(/[\d]+/g);
  contador.innerHTML = `Clicks: ${parseInt(numeroDeClicks) + 1}`; 

});

