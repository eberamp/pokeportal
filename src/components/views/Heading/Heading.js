import React from 'react';

const Heading = function(props){

	let headingSize;

	switch (props.size) {
		case 1: headingSize = <h1>{ props.text }</h1>; break;
		case 2: headingSize = <h2>{ props.text }</h2>; break;
		case 3: headingSize = <h3>{ props.text }</h3>; break;
		case 4: headingSize = <h4>{ props.text }</h4>; break;
		case 5: headingSize = <h5>{ props.text }</h5>; break;
		
		default: headingSize = <h3>{ props.text }</h3>; break;
	}

	return headingSize;
}

export { Heading };