const { getAnimal, getAnimalsByAge } = require('../src/getAnimal.js');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 2, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existem o animais com a idade procurada', () => {
    test('Retorne o array de animais', () => {
      expect.assertions(1);
      return getAnimalsByAge(2).then(animals => {
        expect(animals).toEqual([{ name: 'Dorminhoco', age: 2, type: 'Dog' }, { name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});