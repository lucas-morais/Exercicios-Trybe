import './App.css';
import Task from './Task';

const compromissos = ['Estudar React', 'Aula Ao Vivo', 'Exercícios', 'Revisar Conteúdo']
function App() {
  return (
   compromissos.map((compromisso) => Task(compromisso))
   
  );
}

export default App;
