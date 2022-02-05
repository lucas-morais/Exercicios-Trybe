const readline = require('readline-sync')

const files = [
  'imc',
  'velocidade',
  'sorteio',
  'fatorial',
  'fibonacci',
];

const filesList = files.reduce((acc, file, index) => (
  acc + `${index + 1} ${file}\n`), 'Escolha o script\n\n');

const rodarScript = (fileName) => {
  const script = require(`./${fileName}`)
  console.log(`\nRodando script ${fileName}\n`);
  script();
}

  const getFileName = ()  => {
  const fileIndex = readline.questionInt(filesList)
  const file = files[fileIndex - 1];
  if(file)
    rodarScript(file)
  else 
    console.log('Valor não corrsponde a script');

}

getFileName();