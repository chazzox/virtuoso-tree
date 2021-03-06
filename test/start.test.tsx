import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FixedSizeTree } from '../src';

// These tests can be improved in a later updates

// does it crash
describe('it', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FixedSizeTree itemSize={20} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
