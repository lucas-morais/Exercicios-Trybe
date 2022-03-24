import { Pizza, numberOfSlices, printPizza } from "./exercicio_3";

type comunFlavor = 'Calabresa' | 'Frango' | 'Pepperoni';

type vegetarianaFlavor = 'Marguerita' | 'Palmito' | 'Cogumelo';

type doceFlavor = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface PizzaCommun extends Pizza {
  flavor:  comunFlavor;
  slices: numberOfSlices;
}

interface PizzaVegetariana extends Pizza{
  flavor: vegetarianaFlavor;
  slices: numberOfSlices;
}

interface PizzaDoce extends Pizza {
  flavor: doceFlavor;
  slices: 4;
}

const PizzaCalabresa: PizzaCommun = {
  flavor: 'Calabresa',
  slices: 8
}

const PizzaPepperoni: PizzaCommun = {
  flavor: 'Pepperoni',
  slices: 8
}

const PizzaFrango: PizzaCommun = {
  flavor: 'Frango',
  slices: 8
}
printPizza(PizzaCalabresa);
printPizza(PizzaPepperoni)
printPizza(PizzaFrango);

const PizzaPalmito: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 6,
}

const PizzaCogumelo: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 6,
}

printPizza(PizzaPalmito);
printPizza(PizzaCogumelo);

const PizzaMashmallow: PizzaDoce = {
  flavor: 'Marshmallow',
  slices: 4,
} 

printPizza(PizzaMashmallow);