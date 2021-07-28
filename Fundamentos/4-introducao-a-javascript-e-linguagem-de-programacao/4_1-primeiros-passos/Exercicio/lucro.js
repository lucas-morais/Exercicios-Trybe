let valorCusto = 100;
let valorVenda = 200;

if(valorCusto<0 || valorVenda<0){
  console.log("Valores inválidos");
}

let valorCustoTotal = valorCusto + 0.2*valorCusto;
console.log("Custo total: " + valorCustoTotal);

let lucro = valorVenda - valorCustoTotal;
console.log("Lucro: " + lucro);

