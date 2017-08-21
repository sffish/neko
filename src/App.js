import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {logo} from './neko-01.svg';
import './main.less';


class App extends Component {
  render() {
    console.log("");
    return (
      <div className="App">
        <div className="App-header">
          <img src={'neko-01.svg'} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Button
          content='Like'
          icon='heart'
          label={{ as: 'a', basic: true, content: '2,048' }}
          labelPosition='right'
        />
      </div>
    );
  }
}

export default App;
