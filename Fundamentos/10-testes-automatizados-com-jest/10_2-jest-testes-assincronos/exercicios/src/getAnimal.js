const Animals = [
  { name: 'Dorminhoco', age: 2, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animalInfo) => animalInfo.name === name);
      console.log(animal);
      if (animal !== undefined) {
        return resolve(animal);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animals = Animals.filter((animalInfo) => animalInfo.age === age);
      if (animals.length > 0) {
        return resolve(animals);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then((animal) => animal);
};

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age).then((animals) => animals);
};

module.exports = {
  getAnimal,
  getAnimalsByAge,
};
