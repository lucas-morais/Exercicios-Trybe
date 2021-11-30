import React from 'react';
import MyContext from './context';

class OtherDaughter extends React.Component {
  componentDidMount() {
  }

  render() { 
    return(
      <div>
        <h4>Eu sou outra filha</h4>
          <p>{`Eu tenho ${this.context.money} para gastar`}</p>
          <button onClick={this.context.spendMoney}>Fazer pedido no Ifood</button>
      </div>
    )
      
  }
}

OtherDaughter.contextType = MyContext;
 
export default OtherDaughter;