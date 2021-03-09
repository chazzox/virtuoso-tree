import * as React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight.js';

const StyledHighlight = styled(Highlight)`
	margin: 40px;
	height: 400px;
	overflow-y: scroll;
`;

const Codeblock = () => {
	const [fileSrc, setFileSrc] = React.useState('');

	React.useEffect(() => {
		fetch('https://raw.githubusercontent.com/chazzox/virtuoso-tree/main/docs/src/components/Demo.tsx')
			.then(res => res.text())
			.then(body => setFileSrc(body));
	}, []);

	return <StyledHighlight language="javascript">{fileSrc}</StyledHighlight>;
};

export default Codeblock;
