import React from 'react';

import { Link } from 'react-router-dom';

import { Heading } from '../../views/Heading/Heading.js';
import { TextInput } from '../../views/TextInput/TextInput.js';
import { Button } from '../../views/Button/Button.js';
import { PokemonCardCompact } from '../../containers/PokemonCardCompact/PokemonCardCompact.js';

import { userStore } from '../../../stores/user.js';


class PortalPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favoritesCount: userStore.getFavoritesCount(),
      pokemon: null,
      searchCriteria: "",
      error: false,
      addedToFavorites: false,
    }
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const searchCriteria = this.state.searchCriteria;
    if (searchCriteria === ''){
      return;
    }

    if (this.state.pokemon && this.state.pokemon?.name === searchCriteria){ // If its the same pokemon we avoid making another request
      return;
    }

    try {

      const resource = `https://pokeapi.co/api/v2/pokemon/${searchCriteria.toLowerCase()}`; 
      const response = await fetch(resource);
      if (!response.ok){
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      this.setState({
        pokemon: data,
        addedToFavorites: false,
        error: false
      });

    } catch(err) {
      // Log error or something
      this.setState({error: true});
    }

  } // end of handleOnSubmit

  agregarFavoritos = (pokemonId) => {
    this.setState({
      favoritesCount: this.state.favoritesCount + 1,
      addedToFavorites: true
    });

    userStore.saveToFavorites([this.state.pokemon.id]);
  }

  _renderFetchedInformation = () => {
    if (this.state.error){
      return <p>Cuál es ese pokémon?</p>

    } else if (this.state.pokemon) {
      return (
        <div>
          <PokemonCardCompact pokemon={this.state.pokemon} />
          <Button disabled={this.state.addedToFavorites} text="Guardar en favoritos" onClick={this.agregarFavoritos} />
        </div>
      );

    }
  }

  // TODO: This same function is used in others components (keeping track of the user input) it should be refactored as a hook
  // TODO: Refactor name too..
  update = (event) => this.setState({ searchCriteria: event.target.value });

  render(){

  	return(
      <div className="container h-100 d-flex justify-content-center align-items-center bg-light">
        <div>

          <form onSubmit={this.handleOnSubmit}>
            <label htmlFor="busqueda">Encuentra tu próximo pokémon</label>
            <TextInput id="busqueda" className="w-75" placeHolder="Introduce el nombre de un pokemon" onChange={this.update}/>
            <Button text="Buscar"/>
          </form>

          <Link to='/favorites'>> Ver mis favoritos ({this.state.favoritesCount})</Link>
          {this._renderFetchedInformation()}

        </div>
      </div>
  	);
  }

}

export default PortalPage;