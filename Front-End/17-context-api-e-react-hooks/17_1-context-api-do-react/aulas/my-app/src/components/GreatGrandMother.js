import React from 'react';
import GrandMother from './GrandMother';
import MyContext from './context';

class GreatGrandMother extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      money:10000000,
    }
    this.handleMoney = this.handleMoney.bind(this);
  }

  handleMoney() {
    this.setState((prevState) =>({
      money: prevState.money -100,
    }));
  }

  render() { 
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleMoney
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <h1>Eu sou a bisavó</h1>
          <GrandMother />      
        </div>

      </MyContext.Provider>
    );
  }
}
 
export default GreatGrandMother;