import React from 'react';

class CheckBox extends React.Component {
  render() { 
    const {name, checked, handleChange} = this.props
    return (
      <input 
        type="checkbox" 
        name={name}
        checked={checked}
        onChange={handleChange} 
        
      />
    );
  }
}
 
export default CheckBox;
