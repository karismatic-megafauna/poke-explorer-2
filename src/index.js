import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import AppRouter from './routes';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
