const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorningShift = () => lesson2.turno = 'manhã';
addMorningShift();
console.log(lesson2);

const listKeys = (object) => {
  console.log('\nKeys:');
  Object.keys(object).forEach(key => console.log(key));
  console.log('-------------------\n');
} 

listKeys(lesson1);

const objectSize = (object) => console.log(Object.keys(object).length);

objectSize(lesson3);
objectSize(lesson2);
objectSize(lesson1);

const listValues = (object) => {
  console.log('\nValues:');
  Object.values(object).forEach(value => console.log(value));
  console.log('-------------------\n');
} 

listValues(lesson1);

const allLessons = Object.assign({}, {lesson1:lesson1, lesson2:lesson2, lesson3:lesson3});
console.log(allLessons);


const numberOfStudents = () => {
  const lessons = Object.keys(allLessons);
  let students = 0;
  lessons.forEach( lesson => students += allLessons[lesson].numeroEstudantes);
  return students;
}

console.log(numberOfStudents());

const getValueByNumber = (object, position) => {
  const keys = Object.keys(object)
  if (position < keys.length) {
    return object[keys[position]];
  } else {
    return 'Índice fora dos limites.'
  }
}

console.log(getValueByNumber(lesson1, 0));
console.log(getValueByNumber(lesson1, 5));

const verifyPair = (object, key, value) => {
  const pairs = Object.entries(object);
  let isValid = false;
  pairs.forEach(pair => isValid = (pair[0]==key) && (pair[1])==value);
  return isValid;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson2, 'turno', 'noite'));

const mathStudents = (object, subject) => {
  const lessons = Object.keys(object);
  const studentNumber = lessons.
    filter( lesson => object[lesson].materia === subject).
    reduce((l1, l2) => object[l1].numeroEstudantes + object[l2].numeroEstudantes);
  
  return studentNumber;
}

console.log(mathStudents(allLessons, 'Matemática'));

const createReport = (object, teatcher) => {
  console.log('\n---------------------------------------');
  const lessons = Object.keys(object).filter( lesson => object[lesson].professor === teatcher); 
  const report = {
    professor: teatcher,
    aulas: lessons.map(lesson => object[lesson].materia),
    estudantes: lessons.reduce((l1, l2) => object[l1].numeroEstudantes + object[l2].numeroEstudantes)
  }

  return report;
}


console.log(createReport(allLessons, 'Maria Clara'));