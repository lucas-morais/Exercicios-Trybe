import './App.css';
import React from 'react';
import PersonalDataField from './components/PersonalDataField';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome:'',
      email:'',
      cpf:'',
      endereco:'',
      cidade:'',
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }
  

  render() {
    const { nome, email, cpf, endereco, cidade } = this.state;
    return (
      <form>
        <PersonalDataField
          nome={nome}
          email={email}
          cpf={cpf}
          endereco={endereco}
          cidade={cidade}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default App;
