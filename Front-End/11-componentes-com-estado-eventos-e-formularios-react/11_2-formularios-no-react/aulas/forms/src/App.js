import './App.css';
import React from 'react';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import CheckBox from './components/CheckBox';
import DropDown from './components/DropDown';

const filmes = [
  'Matrix',
  'Mad Max', 
  'Back To The Future',
  'Ghost in the Shell'
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      filme:'',
      resenha:'',
      gostou: false,
      formularioComErros: false,
    }
    this.handleChange = this.handleChange.bind(this);
    
  }

  checkErrors() {

    const {name, resenha} = this.state;

    const errorCases = [
      (name.match(/\d/g) !== null),
      (name.split(' ').length > 10),
      (resenha.length > 50)
    ]
    
    const error = errorCases.some((err) => err);
    console.log(error);
    
    this.setState({
      formularioComErros: error
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.checkErrors() });
  }

  render() {
    const {filme, resenha, gostou, name} = this.state
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form>
          <TextInput 
            name="name" 
            value={name} 
            handleChange={this.handleChange}
          />       
          <label>Escolha o Filme:
            <DropDown name='filme' value={filme} handleChange={this.handleChange} options={filmes}/>
          </label>
          <TextArea 
            name="resenha" 
            value={resenha} 
            handleChange={this.handleChange}
          />
          <label>Gostou? 
            <CheckBox name="gostou" checked={gostou} handleChange={this.handleChange}/>
          </label>

        </form>
      </div>
    );

  }
}

export default App;
