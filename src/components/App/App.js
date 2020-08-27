import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../../services/routing/AppRouter/AppRouter.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<Router>
			<AppRouter />
		</Router>
	);
}

export default App;
