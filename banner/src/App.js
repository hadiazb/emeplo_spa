import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Banner from './Components/Banner';

import './styles/style.scss';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Banner />
			</Router>
		</Provider>
	);
}

export default App;
