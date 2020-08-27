import React from 'react';

import { Redirect } from 'react-router-dom';

import { Heading } from '../../views/Heading/Heading.js';
import { Button } from '../../views/Button/Button.js';
import { PokemonCard } from '../../containers/PokemonCard/PokemonCard.js';

import { userStore } from '../../../stores/user.js';
import { backend } from '../../../services/backend/backend.js';


class WelcomePage extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      errorLoading: false,
      clickedContinue: false,
      assignedPokemon: userStore.getAssignedPokemon()
    };

  } // end of constructor

  continueToPortal = () => {

    this.setState({
      errorLoading: false,
      clickedContinue: true
    });

  }

  componentDidMount(){
    /* Here I would check the local storage to see if the user 
    had already been assigned a pokemon or has used an invitation */

    if(!this.state.assignedPokemon){
      
      // TODO: Since simulatedRequestToValidate is used across components this funcionality should be composed as a hook, refactor later..
      const inviteCode = this.props.match.params.code; // Here I get the invitation code from the invitation url
      const response = backend.simulatedRequestToValidate(inviteCode);
      if(response.ok){

        // TODO: Refactor as callbacks once the state has been set
        userStore.setAssignedPokemon(response.pokemon);
        userStore.setInvitation(inviteCode); // TODO: makes a little noise since I'm passing an invitation "code", refactor the name 
        userStore.setAuthenticated(true);
        this.setState({assignedPokemon: response.pokemon});

      } else {
        this.setState({errorLoading: true});
      }
    }

  }

  render(){

    if (this.state.errorLoading){
      return <Redirect to="/" />;
    }
    
    if (this.state.clickedContinue){
      return <Redirect to="/portal" />;
    }

    const assignedPokemon = this.state.assignedPokemon;

  	return(
  		<div className="container bg-light">
        <div>

		      <Heading text="Bienvenido, nuevo entrenador!" size={1} />
          <Heading text="Conoce a tu primer pokémon" size={4} />

          {assignedPokemon && <PokemonCard pokemonName={assignedPokemon?.name} />}
          <Button text="Continuar a mi portal" onClick={this.continueToPortal} />

        </div>
  		</div>
  	);

  } // end of render

}

export default WelcomePage;