import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {logo} from './neko-01.svg';
import style from "./main.less";
//import style from "./index.css";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      scrollTop: 0,
      catwalk:0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    this.setState( (prevState, props) => {
        
      const catwalk = document.body.scrollTop - document.getElementById('zone-scroll').offsetTop;
      return {
        scrollTop:document.body.scrollTop,
        catwalk:catwalk>0? catwalk:0
      }   
    })
  }

  render() {
    console.log(this.state);
    //console.log(style)
    return (
      <div className="container">
        <div className={style.App}>
          <div className={style['App-header']}>
            <img src={"./neko-01.svg"} className={style['App-logo']+' spin' } alt="logo" />
            <h2>Welcome to React miao</h2>
          </div>
          <div className={style['App-intro']} id="zone-scroll">
            <div className={style.section} id="zone-scroll-1">
              <div className ={style.titlepic} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*0.5).toString()+'px' }}>
              </div>
            </div>
            <hr /> 
            <div className={style.section}>
              <div className ={style.titlepic} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*3).toString()+'px' }}>
              </div>
            </div> 
            <hr />
            <div className={style.section}>
              <div className ={style.titlepic} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*3).toString()+'px' }}>
              </div>
            </div> 
          </div>

           <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, content: '2,048' }}
            labelPosition='right'
          />
        </div>
      </div>
    );
  }
}

export default App;
