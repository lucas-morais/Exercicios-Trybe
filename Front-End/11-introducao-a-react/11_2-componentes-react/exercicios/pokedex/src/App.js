import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';
import pokemons from './data';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="structure">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
