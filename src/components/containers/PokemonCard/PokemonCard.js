
import React from 'react';

import { Image } from '../../views/Image/Image.js';

class PokemonCard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      pokemon: {},
      isLoading: true,
      error: false
		}
	}

	async componentDidMount(){

    try {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`);
      if (!response.ok){
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      this.setState({
        pokemon: data,
        isLoading: false,
        error: false
      });

    } catch(err) {
      // Log error or something
      this.setState({error: true});
    }

	} // end of componentDidMount

	render(){

    // TODO: This needs serious refactoring... lol
    // Stats should have its own component as well as movements

    if (this.state.error){
      return <p>Algo salio mal al cargar los datos :(</p>
    }

    if (this.state.isLoading){
      return <p>Cargando...</p>
    }

    const pokemon = this.state.pokemon;
    const POKEMON_IMAGE_WIDTH = 200;

		return(
      
      <React.Fragment>

        <Image src={pokemon.sprites.front_default} width={POKEMON_IMAGE_WIDTH} alt={`Imagen del pokemon ${pokemon.name}`} />

        <ul>

          <li>Nombre: { pokemon.name }</li>
          <li>Tipo(s): { pokemon.types.map( types => `${types.type.name} ` ) } </li> 
          <li>
            Stats:
            <ul>
            {pokemon.stats.map( stats => {
              return <li key={stats.stat.name}>{stats.stat.name}: {stats.base_stat}</li>
            })}
            </ul>
          </li>
          <li>Movimientos: { pokemon.moves.map( moves => `${moves.move.name}, `) }</li>
          <li>Ubicaciones: </li>

        </ul>

      </React.Fragment>
		);

	} // end of render

}

export { PokemonCard };