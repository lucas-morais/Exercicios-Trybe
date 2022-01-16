const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'PRIMEIRO_REDUCER':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'SEGUNDO_REDUCER':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = Redux.createStore(combinedReducers);

console.log(store.getState());

const newFirstName = {
  nome: 'Ringo',
  sobrenome: 'Star',
};

const newSecondName = {
  nome: 'Billy',
  sobrenome: 'Shears',
};

const personName = (type, { nome, sobrenome }) => ({
  type,
  nome,
  sobrenome,
});
const nameFirstPerson = document.getElementById('nome-1');
const lastNameFirstPerson = document.getElementById('sobrenome-1');
const nameSecondPerson = document.getElementById('nome-2');
const lastNameSecondPerson = document.getElementById('sobrenome-2');
store.subscribe(() => {
  console.log(store.getState());
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  nameFirstPerson.innerHTML = meuPrimeiroReducer.nome;
  lastNameFirstPerson.innerHTML = meuPrimeiroReducer.sobrenome;
  nameSecondPerson.innerHTML = meuSegundoReducer.nome;
  lastNameSecondPerson.innerHTML = meuSegundoReducer.sobrenome;
});

window.onload = () => {
  setTimeout(() => {
    store.dispatch(personName('PRIMEIRO_REDUCER', newFirstName));
    store.dispatch(personName('SEGUNDO_REDUCER', newSecondName));
  }, 3000);
};
