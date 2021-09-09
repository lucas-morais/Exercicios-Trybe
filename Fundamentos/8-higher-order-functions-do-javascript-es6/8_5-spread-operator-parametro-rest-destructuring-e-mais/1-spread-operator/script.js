const carros = ['Gol', 'HB20', 'Focus']
const motos = ['Biz', 'R1']

const veiculos = ['F40', ...carros, 'Uno', ...motos];
console.log(veiculos);

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: 28,
  cidade: 'BH'
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
}

console.log(pessoaTryber);

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

