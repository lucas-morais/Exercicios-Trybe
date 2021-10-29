import React, { Component } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.changeSaveEmail = this.changeSaveEmail.bind(this);
  }

  changeEmail({ target }) {
    const { value } = target;
    this.setState({ email: value });
  }

  changeSaveEmail() {
    const { email } = this.state;
    this.setState({ email:'', saveEmail: email });
  }
  
  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">Email
          <input 
            id="id-email" 
            type="email"
            value={ email }
            onChange = { this.changeEmail }
          />
        </label>
        <input 
          id="btn-send" 
          type="button" 
          data-testid="id-send" 
          value="Enviar"
          onClick={ this.changeSaveEmail }
        />
        <input id="btn-back" type="button" value="Voltar"/>
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default App;
