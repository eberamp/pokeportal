
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Heading } from '../../views/Heading/Heading.js';
import { TextInput } from '../../views/TextInput/TextInput.js';
import { Button } from '../../views/Button/Button.js';

import { userStore } from '../../../stores/user.js';
import { backend } from '../../../services/backend/backend.js';


class BetaAccessValidation extends React.Component {
	
	constructor(props){

		super(props);

		this.state = {
      isAccessValid: false,
      invitation: "" // 
		};

	} // end of constructor

  handleOnSubmit = (event) => {

    event.preventDefault();

    // here we could make a backend request to validate the invitation and return the assigned pokemon
    const response = backend.simulatedRequestToValidate(this.state.invitation);
    if(response.ok){

      userStore.setAssignedPokemon(response.pokemon);
      userStore.setInvitation(this.state.invitation);
      userStore.setAuthenticated(true);
      this.setState({isAccessValid: true});

    }
     
  } // end of handleOnSubmit

  update = (event) => this.setState({ invitation: event.target.value });

	render() {

    if (this.state.isAccessValid){
      return <Redirect to="/welcome" />; // we let the routing handle which component is rendered for the given url
    }

		return(

      // The layout styling here its 

      <div>

    
        <Heading text="Unete a la beta, que esperas!" />
      
        <form onSubmit={this.handleOnSubmit}>
          <TextInput placeHolder="Introduce tu link de invitación" onChange={this.update} className="w-75"/>
          <Button text="Ingresar" />
        </form>
 
      </div>

		); 
	} // end of render

}

export default BetaAccessValidation; 