const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index < state.colors.length - 1 ? state.index + 1 : 0,
      };
    case 'PREV_COLOR':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.colors.length - 1,
      };
    case 'RANDOM_COLOR':
      const newColor = criarCor();
      return {
        ...state,
        colors: [...state.colors, newColor],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const nextColor = () => ({
  type: 'NEXT_COLOR',
});

const previousColor = () => ({
  type: 'PREV_COLOR',
});

const randomColor = () => ({
  type: 'RANDOM_COLOR',
});

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const randomButton = document.getElementById('random');

nextButton.addEventListener('click', () => {
  store.dispatch(nextColor());
});

previousButton.addEventListener('click', () => {
  store.dispatch(previousColor());
});

randomButton.addEventListener('click', () => {
  store.dispatch(randomColor());
});

const container = document.getElementById('container');
const colorValue = document.getElementById('value');
const store = Redux.createStore(reducer);
store.subscribe(() => {
  const { colors, index } = store.getState();
  container.style.backgroundColor = colors[index];
  colorValue.textContent = colors[index];
});
console.log(store.getState());
