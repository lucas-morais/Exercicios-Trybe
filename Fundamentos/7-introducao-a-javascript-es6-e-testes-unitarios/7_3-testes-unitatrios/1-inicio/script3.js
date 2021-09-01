const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais.');

const person1 = {name: 'Jonh', age: 21};
const person2 = {name: 'Jonh', age: 21};

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais.');

const person3 = {name: 'Jonh', age: 21};

assert.deepStrictEqual(person1, person3, 'Erro: os valores do objeto são estritamente iguais.');



