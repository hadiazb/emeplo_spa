import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Header from './Pages/Header';

import './styles/style.scss';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
			</Router>
		</Provider>
	);
}

export default App;
