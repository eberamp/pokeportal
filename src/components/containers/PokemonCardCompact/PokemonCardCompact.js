
import React from 'react';

import { Image } from '../../views/Image/Image.js';

// Maybe I should 
class PokemonCardCompact extends React.Component {

	render(){

    const pokemon = this.props.pokemon;
    const image = this.props.image;

		return(
      <div>

        <Image src={image ? image : pokemon.sprites.front_default} width={200} alt={`Imagen del pokemon ${pokemon.name}`} />
        <div>
          Nombre: <b>{pokemon.name}</b>
        </div>
      
      </div>
		);

	} // end of render

}

export { PokemonCardCompact };