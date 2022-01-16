
// salario bruto
let salario = 3000;

// declarando variaveis
let aliquotaINSS;
let aliquotaIR;
let salarioBase;
let salarioLiquido;
let parcela;

// calculando a aliquota do INSS
if(salario<=1556.94){
  aliquotaINSS = salario*0.08;
} 
else if (salario<=2594.92){
  aliquotaINSS = salario*0.09;
} 
else if (salario <=5189.82) {
  aliquotaINSS = salario*0.11;
} 
else {
  aliquotaINSS = 570.88;
}

// valor do salario base
salarioBase = salario - aliquotaINSS;


// calculando aliquota do imposto de renda e parcela de dedução
if (salarioBase <= 1903.98){
  aliquotaIR = 0;
  parcela = 0;
} 
else if ( salarioBase <= 2826.65){
  aliquotaIR = salarioBase*0.075;
  parcela = 142.80;
} 
else if (salarioBase <= 3751.05){
  aliquotaIR = salarioBase*0.15
  parcela = 354.80;
} 
else if (salarioBase <= 4664.68) {
  aliquotaIR = salarioBase*0.22;
  parcela = 636.13;
} 
else {
  aliquotaIR = salarioBase*0.275;
  parcela = 869.36;
}

// calculando salario liquido
salarioLiquido = salarioBase - (aliquotaIR - parcela);

console.log(salarioLiquido);