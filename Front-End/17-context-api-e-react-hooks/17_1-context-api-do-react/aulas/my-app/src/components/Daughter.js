import React from 'react';
import MyContext from './context';

class Daughter extends React.Component {
  render() { 
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          {
            (value) => (
              <>
                <p>{`Eu tenho ${value.money} para gastar`}</p>
                <button onClick={value.spendMoney}>Fazer pedido no Ifood</button>
              </>
            )
          }
        </MyContext.Consumer>
      </div>
    );
  }
}
 
export default Daughter;