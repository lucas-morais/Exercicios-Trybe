import { Component } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import './style.css';

class PokemonCard extends Component {

  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return(
      <div className="pokemon">
        <PokemonInfo name={name} type={type} averageWeight={averageWeight}/>
        <PokemonImage image={image} />
      </div>
    );
  }
}

export default PokemonCard; 