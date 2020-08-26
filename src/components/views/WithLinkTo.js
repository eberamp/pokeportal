import React from 'react';


function WithLinkTo(props){

	return function(Component){

		return class extends React.Component {
			render() {
				return (
					<a href={props.href || '#'}>
						<Component { ...this.props } />
					</a>
				);
			}
		} // end class
	} // end anonymous function
	
}

export { WithLinkTo };