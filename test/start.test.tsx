import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AlternativeTree } from '../src';

// These tests can be improved in a later updates

// does it crash
describe('it', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AlternativeTree itemData={[]} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
