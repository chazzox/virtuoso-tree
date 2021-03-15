import * as React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';

const StyledHighlight = styled(Highlight)`
	margin: 40px;
	height: 400px;
	overflow-y: scroll;
`;

const Codeblock: React.FC<{ url: string }> = ({ url }) => {
	const [fileSrc, setFileSrc] = React.useState('');

	React.useEffect(() => {
		fetch(url)
			.then((res) => res.text())
			.then((body) => setFileSrc(body));
	}, []);

	return <StyledHighlight className="javascript">{fileSrc}</StyledHighlight>;
};

export default Codeblock;
