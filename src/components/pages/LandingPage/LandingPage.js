
import React from 'react';
import BetaAccessValidation from '../../containers/BetaAccessValidation';

function LandingPage(){

	return (
		// I leave the outer layout styling here so if the landing page changes (with new components)
		// I can easly modify how the whole page is gonna look (structure)
		<div className="container h-100 d-flex justify-content-center align-items-center bg-light">
			<BetaAccessValidation />
		</div>
	);

}

export default LandingPage;