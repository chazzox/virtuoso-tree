import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as Cookies from 'js-cookie';

import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Codeblock from './components/Codeblock';

import { themes } from './themes';

const GlobalContainer = createGlobalStyle((props) => ({
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
	background-color: ${(props) => props.theme.errorBackground};
	color: ${(props) => props.theme.buttonTextColor};
	width: 45%;
	text-align: center;
	border-radius: 8px;
	margin: 10px auto;
	padding: 5px;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.tertiaryFont};
	margin-left: 40px;
`;

const Button = styled.div`
	background-color: ${(props) => props.theme.primaryAccentBackground};
	color: ${(props) => props.theme.buttonTextColor};
	user-select: none;
	padding: 8px;
	width: fit-content;
	border-radius: 8px;
	margin: 10px auto;
`;

const DemoContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

const DemoWrapper = styled.div`
	flex: 1;
	padding: 16px;
`;

const Header = styled.div``;
interface TreeNode {
	children: TreeNode[];
	id: string;
	name: string;
}

let nodeId = 0;

const createNode = (depth: number = 0): TreeNode => {
	const node: TreeNode = {
		children: [],
		id: `${nodeId}`,
		name: `test-${nodeId}`
	};

	nodeId += 1;

	if (depth === 3) {
		return node;
	}

	for (let i = 0; i < 10; i++) {
		node.children.push(createNode(depth + 1));
	}

	return node;
};

const rootNode = Array.from({ length: 10 }, () => createNode());

const getNodeData = (node: TreeNode, nestingLevel: number) => ({
	data: {
		id: node.id.toString(),
		isLeaf: node.children.length === 0,
		isOpenByDefault: false,
		name: node.name,
		nestingLevel
	},
	nestingLevel,
	node
});

function* treeWalker() {
	for (let rootNodeIndex = 0; rootNodeIndex < rootNode.length; rootNodeIndex++) {
		yield getNodeData(rootNode[rootNodeIndex], 0);
	}

	while (true) {
		// @ts-expect-error
		const parentMeta = yield;

		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let i = 0; i < parentMeta.node.children.length; i++) {
			yield getNodeData(parentMeta.node.children[i], parentMeta.nestingLevel + 1);
		}
	}
}

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
			<Header>
				<GlobalContainer />
				<Warning>
					This site and library is in active development (unusable in current form), and docs are unwritten. In the
					future, this site will be replaced with a docusaurus page.
				</Warning>
				<Button onClick={() => setDarkMode(!isDark)}>Toggle Theme</Button>
			</Header>

			<DemoContainer>
				<DemoWrapper>
					<Title>Demo (Using new lib)</Title>
					<Demo2 treeWalker={treeWalker} />
					<Title>Code</Title>
					<Codeblock url="https://raw.githubusercontent.com/chazzox/virtuoso-tree/main/docs/src/components/Demo.tsx" />
				</DemoWrapper>
				<DemoWrapper>
					<Title>Demo (Using React-vtree)</Title>
					<Demo treeWalker={treeWalker} />
					<Title>Code</Title>
					<Codeblock url="https://raw.githubusercontent.com/chazzox/virtuoso-tree/main/docs/src/components/Demo2.tsx" />
				</DemoWrapper>
			</DemoContainer>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
