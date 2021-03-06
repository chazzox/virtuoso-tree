import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navbar from './src/components/Navbar';
import Docs from './src/routes/Docs';
import Demo from './src/routes/Demo';

import { themes } from './src/themes';

const GlobalContainer = createGlobalStyle(props => ({
	body: {
		margin: 0,
		padding: 0,
		background: props.theme.primaryBackground
	},
	'*': {
		fontFamily: 'Roboto, sans-serif',
		boxSizing: 'border-box',
		letterSpacing: '0.5pt'
	},
	a: {
		textDecoration: 'none'
	}
}));

const App = () => {
	return (
		<ThemeProvider theme={themes.dark}>
			<GlobalContainer />
			<HashRouter>
				<Navbar />
				<Switch>
					<Route path="/about">
						<div>About This library</div>
					</Route>

					<Route path="/demo">
						<Demo />
					</Route>

					<Route path="/docs">
						<Docs />
					</Route>

					<Route path="/">
						<div>test2</div>
					</Route>
				</Switch>
			</HashRouter>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
