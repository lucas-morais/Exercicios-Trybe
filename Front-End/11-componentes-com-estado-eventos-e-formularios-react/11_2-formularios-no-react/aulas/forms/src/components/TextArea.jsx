import React from 'react';

class TextArea extends React.Component {
  
  validateLength(text) {
    return text.length > 50;
  }
  
  render() { 
    const {name, value, handleChange} = this.props;
    const error = this.validateLength(value);
    return (
      <label htmlFor={name}>
        <textarea 
          name={name}
          value={value}
          onChange={handleChange}  
        />
        <span>{error ? 'Texto não pode conter mais que 50 caracteres' : ''}</span>
      </label> 
    );
  }
}
 
export default TextArea;