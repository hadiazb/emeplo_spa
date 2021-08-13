import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Footer from './Pages/Footer';

import './styles/style.scss';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
