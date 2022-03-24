"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPizza = void 0;
function printPizza(pizza) {
    console.log(`Sabor: ${pizza.flavor} - N° de fatias: ${pizza.slices}`);
}
exports.printPizza = printPizza;
const pizzaDeCalabresa = {
    flavor: 'Calabresa',
    slices: 8,
};
printPizza(pizzaDeCalabresa);
const pizzaMarguerita = {
    flavor: 'Marguerita',
    slices: 6
};
printPizza(pizzaMarguerita);
const pizzaDeNutela = {
    flavor: 'Nutela',
    slices: 4
};
printPizza(pizzaDeNutela);
