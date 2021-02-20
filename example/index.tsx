import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Tree } from '../.';

import './index.scss';

const App = () => {
	const [postData, setPostData] = React.useState<GeneralPostResponse | []>([]);

	React.useEffect(() => {
		fetch(
			'https://www.reddit.com/r/AskReddit/comments/lj0dby/which_celebrity_got_cancelled_and_you_genuinely/.json?limit=25'
		)
			.then(res => res.json())
			.then((json: GeneralPostResponse) => {
				setPostData(json);
			});
	}, []);

	return (
		<div className="container">
			{postData.length == 2 && (
				<>
					<h1>Tree demo using reddit comments</h1>
					<h3>
						Using post {postData[0].data.children[0].data.id}{' '}
						<a href="https://www.reddit.com/r/AskReddit/comments/lj0dby/which_celebrity_got_cancelled_and_you_genuinely/">
							(click here to redirect)
						</a>
					</h3>
				</>
			)}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
