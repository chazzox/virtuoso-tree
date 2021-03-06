// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;

		primaryBackground: string;
		secondaryBackground: string;
		tertiaryBackground: string;

		primaryAccentBackground: string;
		secondaryAccentBackground: string;
		tertiaryAccentBackground: string;

		primaryFont: string;
		secondaryFont: string;
		tertiaryFont: string;

		buttonTextColor: string;
	}
}
