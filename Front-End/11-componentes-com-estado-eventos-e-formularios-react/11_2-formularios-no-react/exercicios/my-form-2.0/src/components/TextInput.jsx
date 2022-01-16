import React from 'react';

class TextInput extends React.Component {
  render() { 
    const {
      name, 
      value, 
      format, 
      handleChange, 
      maxLength,
      required
    } = this.props;
    const tagName = name.toLowerCase()
    return (
      <label htmlFor={tagName}>{`${name}: `}
        <input 
          type="text" 
          name={tagName}
          value={format? format(value):value}
          onChange={handleChange}
          maxLength={maxLength}
          required={required}
        />
      </label>
    );
  }
}
 
export default TextInput;