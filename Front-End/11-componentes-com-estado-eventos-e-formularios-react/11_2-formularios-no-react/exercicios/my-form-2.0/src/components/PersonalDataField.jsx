import React from 'react';
import TextInput from './TextInput';
import '../App.css'

class PersonalDataField extends React.Component {
  formatNameField(name) {
    return name.toUpperCase();
  }

  render() { 
    const { nome, email, cpf, endereco, cidade, handleChange } = this.props;
    return (
      <fieldset className="form-field">
        <TextInput 
          name='Nome' 
          value={nome} 
          handleChange={handleChange}
          format={this.formatNameField}
          maxLength={40}
          required={true}
          className="field"
        />
        <TextInput 
          name='Email' 
          value={email} 
          handleChange={handleChange}
          maxLength={50}
          required={true}
        />
        <TextInput 
          name='CPF' 
          value={cpf} 
          handleChange={handleChange}
          maxLength={11}
          required={true}
        />
        <TextInput 
          name='Endereco' 
          value={endereco} 
          handleChange={handleChange}
          maxLength={200}
          required={true}
        />
        <TextInput 
          name='Cidade' 
          value={cidade} 
          handleChange={handleChange}
          maxLength={28}
          required={true}
        />
      </fieldset>
    );
  }
}
 
export default PersonalDataField;