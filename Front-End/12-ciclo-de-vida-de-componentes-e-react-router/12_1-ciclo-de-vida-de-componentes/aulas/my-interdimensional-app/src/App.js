import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      characters: []
     };
     this.fetchChacracters = this.fetchChacracters.bind(this);
  }

  fetchChacracters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(
        data => {
          this.setState({characters: data.results})
        }
      )
  }

  componentDidMount() { 
    this.fetchChacracters();
  }

  render() { 
    const { characters } = this.state;
    return ( 
      <div className="App">
        <h1>
          Rick and Morty Characters
        </h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            return(
              <div className="container">
                <h3>{ name }</h3>
                <img src={image} alt={name} />
              </div>    
            );
          })}
        </div>
      </div>
     );
  }
}
 
export default App;