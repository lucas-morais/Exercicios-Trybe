"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio_3_1 = require("./exercicio_3");
const PizzaCalabresa = {
    flavor: 'Calabresa',
    slices: 8
};
const PizzaPepperoni = {
    flavor: 'Pepperoni',
    slices: 8
};
const PizzaFrango = {
    flavor: 'Frango',
    slices: 8
};
(0, exercicio_3_1.printPizza)(PizzaCalabresa);
(0, exercicio_3_1.printPizza)(PizzaPepperoni);
(0, exercicio_3_1.printPizza)(PizzaFrango);
const PizzaPalmito = {
    flavor: 'Palmito',
    slices: 6,
};
const PizzaCogumelo = {
    flavor: 'Cogumelo',
    slices: 6,
};
(0, exercicio_3_1.printPizza)(PizzaPalmito);
(0, exercicio_3_1.printPizza)(PizzaCogumelo);
const PizzaMashmallow = {
    flavor: 'Marshmallow',
    slices: 4,
};
(0, exercicio_3_1.printPizza)(PizzaMashmallow);
