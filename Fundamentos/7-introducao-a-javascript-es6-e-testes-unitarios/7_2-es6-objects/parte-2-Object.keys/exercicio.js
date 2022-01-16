const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

function showSkills(object) {
  const keys = Object.keys(object);
  keys.forEach(key => console.log(`${key}, Nível: ${object[key]}`));
}

showSkills(student1);
console.log('---------------------------\n');
showSkills(student2);
