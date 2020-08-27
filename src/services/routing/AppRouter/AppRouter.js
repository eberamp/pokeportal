import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// I need to fix the import paths...
import LandingPage from '../../../components/pages/LandingPage';
import WelcomePage from '../../../components/pages/WelcomePage';
import Portal from '../../../components/pages/PortalPage';
import FavoritesPage from '../../../components/pages/FavoritesPage';
import NotFound404Page from '../../../components/pages/NotFound404Page';

import { userStore } from '../../../stores/user.js';

const ProtectedRoute = function(props) {

  // Maybe I should use a HOC for this part ? but I'm not enchancing anything really, I need to move it though
	const accessGranted = props.protectedBy();
	if (!accessGranted) {
		return <Redirect to="/" />;
	}

	return (
		<Route {...props}/>
	);

}

const isUserAuthenticated = function(){
	return userStore.IsAuthenticated();
}

const isUserInvited = function(){
	return userStore.hasInvitation();
}


function AppRouter() {

	return(
		<Switch>
  		<Route component={ LandingPage } exact path="/" />
      <Route component={ WelcomePage } exact path="/pokeportal/invite/:code" />

  		<ProtectedRoute protectedBy={ isUserInvited } component={ WelcomePage } exact path="/welcome" />
  		<ProtectedRoute protectedBy={ isUserAuthenticated } component={ Portal } exact path="/portal" />
  		<ProtectedRoute protectedBy={ isUserAuthenticated } component={ FavoritesPage } exact path="/favorites" />

  		<Route component={ NotFound404Page } path="*" />
  	</Switch>
	);
	
}

export default AppRouter;