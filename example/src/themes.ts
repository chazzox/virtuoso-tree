import React = require('react');
import { DefaultTheme } from 'styled-components';

enum Options {
	dark = 'dark',
	light = 'light'
}

export const themes: { [key in Options]: DefaultTheme } = {
	dark: {
		name: 'Dark',

		primaryBackground: 'rgb(29, 32, 33)',
		secondaryBackground: 'rgb(45, 43, 42)',
		tertiaryBackground: 'rgb(40, 40, 40)',

		primaryAccentBackground: 'rgba(254, 128, 25)',
		secondaryAccentBackground: 'rgb(80, 73, 69)',
		tertiaryAccentBackground: 'rgb(158, 70, 12)',

		primaryFont: 'rgb(235, 219, 178)',
		secondaryFont: 'rgb(168, 153, 132)',
		tertiaryFont: 'rgb(125, 106, 94)',

		buttonTextColor: 'rgb(235, 219, 178)'
	},
	light: {
		name: 'Light',

		primaryBackground: 'rgb(235, 218, 180)',
		secondaryBackground: 'rgb(235, 218, 180)',
		tertiaryBackground: 'rgb(251, 240, 201)',

		primaryAccentBackground: 'rgb(240, 103, 24)',
		secondaryAccentBackground: 'rgb(208, 193, 153)',
		tertiaryAccentBackground: 'rgb(175, 58, 3)',

		primaryFont: '',
		secondaryFont: '',
		tertiaryFont: '',

		buttonTextColor: ''
	}
};

export const ThemeContext = React.createContext({ current: true, toggleTheme: () => {} });
