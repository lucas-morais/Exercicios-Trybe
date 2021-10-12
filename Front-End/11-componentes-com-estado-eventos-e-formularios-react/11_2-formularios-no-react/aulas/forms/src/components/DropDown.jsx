import React from 'react';

class DropDown extends React.Component {
  nameToValue(film) {
    return film.toLowerCase().replace(/\s/g, '-');
  }
  
  render() { 
    const {name, value, handleChange, options} = this.props;
    
    return (
      <select name={name} value={value} onChange={handleChange}>
        {options.map((film) => {
          return(
            <option 
              value={this.nameToValue(film)}
              key={this.nameToValue(film)}
            >{film}
            </option>
          );
        })}
      </select>
    );
  }
}
 
export default DropDown;