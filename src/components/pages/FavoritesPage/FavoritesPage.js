
import React from 'react';

import { PokemonCardCompact } from '../../containers/PokemonCardCompact/PokemonCardCompact.js';
import { TextInput } from '../../views/TextInput/TextInput.js';
import { Heading } from '../../views/Heading/Heading.js';

import { userStore } from '../../../stores/user.js';

class FavoritesPage extends React.Component {

	constructor(props){

    super(props);

	   this.state = {
      isLoading: true,
      errorLoading: false,
      pokemons: [],
      savedFavorites: userStore.getFavorites(),
      filterText: ""
		}

	}

  async componentDidMount(){

    try {

      const favorites = this.state.savedFavorites;
      // Here I load each fetch in a bunch, that is, an array of promises
      const fetchRequests = favorites.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      });

      const responses = await Promise.all(fetchRequests); // TODO: Need to check for errors on each response
      const data = await Promise.all(responses.map( response => {
        return response.json();
      }));

      this.setState({ 
        isLoading: false,
        errorLoading: false,
        pokemons: data 
      });

    } catch(error) {
      this.setState({ errorLoading: true });
    }

  }

  updateFilterText = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }

  _renderFilter = () => {
    const FAVORITE_MAX_COUNT = 3;
    if(this.state.savedFavorites.length > FAVORITE_MAX_COUNT){
      return <TextInput placeHolder="Nombre de pokemon" onChange={this.updateFilterText} />;
    }
  }


  _renderAllFavorites = () => {

    return this.state.pokemons.map( pokemon => {
      return <PokemonCardCompact key={pokemon.id} pokemon={pokemon}/>
    });

  }

  _renderFilteredFavorites = () => {

    const filterText = this.state.filterText;
    return this.state.pokemons.map( pokemon => {
      if (pokemon.name.includes(this.state.filterText)) {
        return <PokemonCardCompact key={pokemon.id} pokemon={pokemon}/>;
      }
    });

  }


	render(){

    if(this.state.errorLoading){
      return <p>Algo salio mal al cargar tus favoritos :( </p>;
    }

    if(this.state.isLoading){
      return <p>Cargando tus favoritos... :) </p>;
    }


    return(
      <div className="container text-center bg-light">
        
        <Heading text="Mis pokémones Favoritos" />
        {this._renderFilter()}

        <div className="row">

        {(this.state.filterText === "")
        ? this._renderAllFavorites()
        : this._renderFilteredFavorites()}
        
        </div>

      </div>
    );

	}

}

export default FavoritesPage;