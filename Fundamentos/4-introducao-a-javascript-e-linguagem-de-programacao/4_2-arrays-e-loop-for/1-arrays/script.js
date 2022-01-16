let pizzas = ['4 queijos', 'peperoni', 'calabresa', 'marguerita', 'chocolate'];

// pizzas[5] = 'peito de peru'
pizzas.push('peito de peru');

console.log(pizzas)
console.log(pizzas.length)
console.log(pizzas.sort())
console.log(pizzas[3])

pizzas.unshift("nordestina");
for(let index = 0; index < pizzas.length; index++){
  console.log(pizzas[index]);
}

console.log(pizzas.indexOf("marguerita"));

pizzas.pop();
console.log(pizzas);

pizzas.shift();
console.log(pizzas);