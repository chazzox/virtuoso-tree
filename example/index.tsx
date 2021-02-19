import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tree } from '../.';

const App = () => {
  return (
    <div>
      <Tree test="yooo" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
