import React from 'react';

class DropDown extends React.Component {
  render() { 
    const {name, value, options, required} = this.props;
    return (
      <label htmlFor="">
        <select name="" >
          {options.map()}
        </select>
      </label>
    );
  }
}
 
export default DropDown;