import React from 'react';

const Button = function(props) {
	return <button disabled={props.disabled} className={props.className} onClick={props.onClick}>{ props.text }</button>
}

export { Button };