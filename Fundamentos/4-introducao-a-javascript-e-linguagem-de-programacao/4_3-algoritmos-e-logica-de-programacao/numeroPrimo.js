let numero = 121;
let ePrimo;
for (let divisor = 2; divisor < numero; divisor+=1){
   ePrimo = numero%divisor;
  if(!ePrimo){
    console.log(numero + " é divisível por " + divisor);
    break;
  }
}

if(!ePrimo){
  console.log("O número não é primo");
}
else{
  console.log("O número é primo");
}