import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNumbers1: 0,
      clickNumbers2: 0,
      clickNumbers3: 0,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log("Clicou! - Botão 1");
    this.setState(({ clickNumbers1 }, _props) => ({
      clickNumbers1: clickNumbers1 + 1,
    }), () => {
      console.log(`Cor do Botão 1: ${this.chooseColor(this.state.clickNumbers1)}`)
    });
  }

  handleClick2() {
    console.log("Clicou! - Botão 2");
    this.setState(({ clickNumbers2 }, _props) => ({
      clickNumbers2: clickNumbers2 + 1,
    }), () => {
      console.log(`Cor do Botão 2: ${this.chooseColor(this.state.clickNumbers2)}`)
    });
  }
  
  handleClick3() {
    console.log("Clicou! - Botão 3");
    this.setState(({ clickNumbers3 }, _props) => ({
      clickNumbers3: clickNumbers3 + 1,
    }), () => {
      console.log(`Cor do Botão 3: ${this.chooseColor(this.state.clickNumbers3)}`)
    });
  }

  chooseColor(numberOfClicks) {
    return numberOfClicks % 2 ? "red" : "green";
  }

  render() {
    const { clickNumbers1, clickNumbers2, clickNumbers3 } = this.state;

    return (
      <div>
        <button
          onClick={this.handleClick1}
          style={{ backgroundColor: this.chooseColor(clickNumbers1) }}
        >
          Botão1 - Clicks:{clickNumbers1}
        </button>
        <button
          onClick={this.handleClick2}
          style={{ backgroundColor: this.chooseColor(clickNumbers2) }}
        >
          Botão2 - Clicks:{clickNumbers2}
        </button>
        <button
          onClick={this.handleClick3}
          style={{ backgroundColor: this.chooseColor(clickNumbers3) }}
        >
          Botão3 - Clicks:{clickNumbers3}
        </button>
      </div>
    );
  }
}

export default App;
