import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.css";
export default require('./main.less')
require('./index.html')
console.log('load modules aaa')

//const stylepath = require('./main.less');
//require(x)

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
