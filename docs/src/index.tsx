import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as Cookies from 'js-cookie';

import Demo from './components/Demo';
import Codeblock from './components/Codeblock';

import { themes } from './themes';

const GlobalContainer = createGlobalStyle(props => ({
	'body, html': {
		margin: 0,
		padding: 0,
		background: props.theme.primaryBackground
	},
	'*': {
		fontFamily: 'Roboto, sans-serif',
		boxSizing: 'border-box',
		letterSpacing: '0.5pt',
		transition: 'background-color ease 0.5s'
	},
	a: {
		textDecoration: 'none'
	}
}));

const Warning = styled.div`
	background-color: ${props => props.theme.errorBackground};
	color: ${props => props.theme.buttonTextColor};
	width: 45%;
	text-align: center;
	border-radius: 8px;
	margin: 10px auto;
	padding: 5px;
`;

const Title = styled.h1`
	color: ${props => props.theme.tertiaryFont};
	margin-left: 40px;
`;

const Button = styled.div`
	background-color: ${props => props.theme.primaryAccentBackground};
	color: ${props => props.theme.buttonTextColor};
	user-select: none;
	padding: 8px;
	width: fit-content;
	border-radius: 8px;
	margin: 10px auto;
`;

const App = () => {
	const [isDark, setDarkMode] = React.useState<boolean>(true);

	React.useEffect(() => {
		const ThemeCookie: undefined | boolean = Cookies.getJSON('theme')?.isDark;
		if (ThemeCookie == undefined) {
			Cookies.set('theme', { isDark: true });
		} else {
			setDarkMode(ThemeCookie);
		}
	}, []);

	React.useEffect(() => {
		Cookies.set('theme', { isDark: isDark });
	}, [isDark]);

	return (
		<ThemeProvider theme={themes[isDark ? 'dark' : 'light']}>
			<GlobalContainer />
			<Warning>
				This site and library is in active development (unusable in current form), and docs are unwritten. In the
				future, this site will be replaced with a docusaurus page.
			</Warning>
			<Button onClick={() => setDarkMode(!isDark)}>Toggle Theme</Button>
			<Title>Demo</Title>
			<Demo />
			<Codeblock />
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
