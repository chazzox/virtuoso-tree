import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tree } from '../src';

// These tests can be improved in a later updates

// checking if the
describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tree test="string" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
