import { Component } from 'react';

class PokemonImage extends Component {
  
  render() {
    return(
      <img src={this.props.image} alt="pokemon gif" />
    );
  }
}

export default PokemonImage;