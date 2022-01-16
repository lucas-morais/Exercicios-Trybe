const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const complemento = order.address.apartment;

  return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, N°: ${numero}, AP: ${complemento}.`; 
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const cliente = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type; 
  const total = order.payment.total

  return `Olá ${cliente}, o tatal do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$${total},00.`;

}

console.log(orderModifier(order));