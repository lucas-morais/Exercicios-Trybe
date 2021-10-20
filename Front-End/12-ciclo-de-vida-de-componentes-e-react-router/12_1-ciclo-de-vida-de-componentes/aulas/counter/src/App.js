import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter:0,
    }
    console.log('construtor');
  }
  
  componentDidMount() {
    console.log('componentDidMout');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState, nextProps);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState, prevProps);
  }

  render() {
    console.log('render');
    return (
      <div>
        <p>Contador</p>
        <button onClick={() => this.setState((state) => ({counter:state.counter + 1}))}>
          Soma
        </button>
      <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
