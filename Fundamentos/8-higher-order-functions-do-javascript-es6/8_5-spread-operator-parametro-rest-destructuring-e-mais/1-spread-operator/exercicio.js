const specialFruits = ['Laranja', 'Manga', 'Uva'];
const additionalItems = ['Iogurte', 'Caramelo', 'Suco'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruits, additionalItems));

