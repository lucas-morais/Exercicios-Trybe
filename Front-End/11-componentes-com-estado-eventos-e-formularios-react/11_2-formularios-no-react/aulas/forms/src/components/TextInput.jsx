import React from 'react';

class TextInput extends React.Component {
  validateFormat(name) {
    return name.match(/\d/) !== null; 
  }

  validateNumber(name) {
    return name.split(' ').length > 10; 
  }
  
  render() { 
    const {name, value, handleChange} = this.props;
    const error = this.validateFormat(value) || this.validateNumber(value);
    
    return (
      <label >Nome:
        <input 
          type="text"
          value={value}
          name={name}
          onChange={handleChange}
        />
        <span>{error ? 'Nome inválido' : ''}</span>
      </label>
    );
  }
}
 
export default TextInput;
