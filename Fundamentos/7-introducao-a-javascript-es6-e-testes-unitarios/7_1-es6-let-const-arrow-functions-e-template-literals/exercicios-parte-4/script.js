tryber = {
  nome: 'Bebeto',
  skills: ['JavaScript', 'Python', 'SQL', 'React', 'Redux']
};


const trybe = 'Tryber x aqui';
const substituiX = string => trybe.replace('x', string);
const frase = substituiX(tryber.nome);

const imprimeSkills = (frase, skills) => {
  skills.sort();
  const fraseFinal = 
  `${frase}! Minhas cinco principais skills são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}
    ${skills[3]}
    ${skills[4]}
  `;
  return fraseFinal;
}

console.log(imprimeSkills(frase, tryber.skills));