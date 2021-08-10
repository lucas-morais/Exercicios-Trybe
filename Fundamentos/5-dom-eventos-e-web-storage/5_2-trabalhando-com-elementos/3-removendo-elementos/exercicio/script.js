function removeElementoExceto(nomePai, filhosNaoRemoviveis){
  let pai = document.getElementById(nomePai);
  let filhos = pai.children;
  
  for (let index = filhos.length - 1; index >= 0; index -= 1){
    if (filhos[index].id !== filhosNaoRemoviveis){
      pai.removeChild(filhos[index]);
    }
  }
  console.log(pai);
}

removeElementoExceto('paiDoPai', 'pai');
removeElementoExceto('pai', 'elementoOndeVoceEsta');
removeElementoExceto('elementoOndeVoceEsta', 'primeiroFilhoDoFilho');
