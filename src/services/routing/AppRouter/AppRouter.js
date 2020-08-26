import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from '../../../components/pages/LandingPage';
import WelcomePage from '../../../components/pages/WelcomePage';
import Portal from '../../../components/pages/PortalPage';
import FavoritesPage from '../../../components/pages/FavoritesPage';
import NotFound404Page from '../../../components/pages/NotFound404Page';

const ProtectedRoute = function(props) {

	const callbackValidation = props.protectedBy();
	if (!callbackValidation) {
		return <Redirect to={props.redirectTo} />;
	}

	return (
		<Route {...props}/>
	);
}

const isUserAuthenticated = function(){
	return false;
}

const isInvitationValid = function(){
	return true;
}


function AppRouter() {
	return(
		<Switch>
  		<Route component={ LandingPage } exact path="/" />

  		<ProtectedRoute protectedBy={ isInvitationValid } component={ WelcomePage } exact path="/welcome" />
  		<ProtectedRoute protectedBy={ isUserAuthenticated } component={ Portal } exact path="/portal" />
  		<ProtectedRoute protectedBy={ isUserAuthenticated } component={ FavoritesPage } exact path="/favorites" />

  		<Route component={ NotFound404Page } path="*" />
    </Switch>
	);
	
}

export default AppRouter;