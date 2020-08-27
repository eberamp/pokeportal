import React from 'react';

const Image = function(props) {
	return <img src={ props.src } width={ props.width } alt={ props.alt } ></img>
}

export { Image };