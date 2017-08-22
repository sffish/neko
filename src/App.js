import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {logo} from './neko-01.svg';
import style from "./main.less";
//import style from "./index.css";

class App extends Component {

  render() {
    console.log(style)
    //console.log(style)
    return (
      <div className={style.App}>
        <div className={style['App-header']}>
          <img src={"./neko-01.svg"} className={style['App-logo']} alt="logo" />
          <h2>Welcome to React miao</h2>
        </div>
        <p className={style['App-intro']}>
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
