import './App.css';
import React from 'react';

const URI = 'https://icanhazdadjoke.com/';
const HEADERS = {
  headers: {
    Accept: 'application/json', 
  }
}

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
  
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => { 
        const response = await fetch(URI, HEADERS);
        const responseObject = await response.json();
        this.setState({
          jokeObj: responseObject,
          loading: false
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],

    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    const { joke } = this.state.jokeObj;
    return(
      <div>
        <p>{ joke }</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada 
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>
    
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke })=> (
            <p key={ id }>{ joke }</p>
          ))}
        </span>
        <p>{ loading ? loadingElement :this.renderJokeElement()  }</p>
      </div>
    );

  }
}

export default App;
