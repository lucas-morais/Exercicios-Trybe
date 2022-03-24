export type numberOfSlices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices: numberOfSlices;
}

export function printPizza(pizza: Pizza) {
  console.log(`Sabor: ${pizza.flavor} - N° de fatias: ${pizza.slices}`);
}

const pizzaDeCalabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}
printPizza(pizzaDeCalabresa);


const pizzaMarguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
} 

printPizza(pizzaMarguerita);

const pizzaDeNutela: Pizza = {
  flavor: 'Nutela',
  slices: 4
}

printPizza(pizzaDeNutela);



