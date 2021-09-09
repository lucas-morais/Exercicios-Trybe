const product = {
  nome: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};



const {nome, seller} = product;
console.log(nome);
console.log(seller);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {a: firstName, b: classAssigned, c:subject} = student;
console.log(firstName);
console.log(classAssigned);
console.log(subject);

const printProductDetails = ({nome, price, seller}) => {
  console.log(`Promoção ${nome} por apenas ${price} é só aqui: ${seller}`);
}

printProductDetails(product);