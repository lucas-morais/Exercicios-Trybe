import React from 'react';
import Daughter from './Daughter';
import OtherDaughter from './OtherDaughter';

class Father extends React.Component {
  render() { 
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daughter />
        <OtherDaughter />
      </div>
    );
  }
}
 
export default Father;
