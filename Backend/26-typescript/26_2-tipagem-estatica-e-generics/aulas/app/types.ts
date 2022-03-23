// Type Aliases
type Passaro = {
  cAsas: number;
  cBico: number;
}
function printPassaro(ps: Passaro): void {
  console.log(`Comprimento das asas: ${ps.cAsas}`);
  console.log(`Comprimento do bico: ${ps.cBico}`);
}
const passaro: Passaro = {
  cAsas: 20,
  cBico: 5,
}
printPassaro(passaro);

type operacao = (num1: number, num2: number) => number;
const soma: operacao = (num1, num2) => {
  return num1 + num2
}
console.log(`2 + 7 = ${soma(2, 7)}`);


//Type Union
type esadosDaMateria = 'sólido' | 'líquido' | 'gasoso';
const solido: esadosDaMateria = 'sólido'
console.log(solido);

type rg = number | string;

const rg = 123;
const rg2 = '123';
console.log(rg, rg2);

type so = 'windows' | 'linux' | 'mac';
const melhorSO = 'linux'
console.log(`Melhor SO: ${melhorSO}`);

type vogal = 'a' | 'e' | 'i' | 'o' | 'u';
const umaVogal = 'o';
console.log(umaVogal); 