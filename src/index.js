import React from 'react';
import ReactDOM from 'react-dom';
import App from './redesign/App';
import Projects from './redesign/Projects';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
registerServiceWorker();
