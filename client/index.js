import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import history from './history';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter history={history}>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
