import { Component } from 'react';
import './style.css';
class PokemonInfo extends Component {
  
  render() {

    const {value, measurementUnit} = this.props.averageWeight;
    return (
      <div>
        <ul className="pokemon-list">
          <li>{this.props.name}</li>
          <li>{this.props.type}</li>
          <li>Peso Médio: {value} {measurementUnit}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonInfo;