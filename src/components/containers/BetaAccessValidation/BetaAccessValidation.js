
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Heading } from '../../views/Heading/Heading.js';
import { TextInput } from '../../views/TextInput/TextInput.js';
import { Button } from '../../views/Button/Button.js';


class BetaAccessValidation extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			isAccessValid: false
		};

		this.headingText = "Introduce tu link de invitacion";
	} // end of constructor

  validateInvitationURL = (url) => {
    console.log(url);
  } //

	render() {

    if (this.state.isAccessValid){
      return <Redirect to="/welcome" />; // we let the routing handle what component render for the url
    }

		return(
	    <div>
        <Heading text={this.headingText} />
        <TextInput placeHolder="" onChange={this.validateInvitationURL} />
        <Button text="Ingresar" />
      </div>

		); 
	}

}

export default BetaAccessValidation; 