import React from 'react';
import Daughter from './Daughter';

class Father extends React.Component {
  render() { 
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daughter />
      </div>
    );
  }
}
 
export default Father;
