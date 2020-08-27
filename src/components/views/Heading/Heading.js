import React from 'react';

const Heading = function(props){

	let headingSize;
	switch (props.size) {

		case 1: headingSize = 'h1'; break;
		case 2: headingSize = 'h2'; break;
		case 3: headingSize = 'h3'; break;
		case 4: headingSize = 'h4'; break;
		case 5: headingSize = 'h5'; break;
		
		default: headingSize = 'h3'; break;

	}

	let Level = headingSize;
	return <Level className={props.className}>{ props.text }</Level>;
}

export { Heading };