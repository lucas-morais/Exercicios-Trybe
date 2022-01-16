let peca = "Torre"

peca = peca.toLowerCase();

switch (peca) {
  case "bispo":
    console.log("Diagonal");
    break;
  case "cavalo":
    console.log("Movimento em L - totalizando 3 casas");
    break;
  case "peão": 
    console.log("Uma casa para frente - captura em diagona");
    break;
  case "rainha":
    console.log("Todas as direções");
    break;
  case "rei":
    console.log("Todas as direções - uma casa");
    break;
  case "torre":
    console.log("Hrizontal e Vertical");
    break;
  default:
    console.log("Peça não existe");
}


