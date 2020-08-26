import React from 'react';

const TextInput = function(props){
	return <input placeholder={ props.placeHolder } onChange={ props.onChange } />
}

export { TextInput };