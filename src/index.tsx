import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('main') as HTMLElement
);
registerServiceWorker();
