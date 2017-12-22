import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import {logo} from './neko-01.svg';
import style from "./main.less";
import LIB from './lib'
var FontAwesome = require('react-fontawesome');
//import style from "./index.css";

const Column = Grid.Column;
const Row = Grid.Row; 
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
    //console.log(style)
    return (
      <div className="container">
        <div className={style.App}>
          <div className={LIB.getStyle('App-header')}>
            <Grid>
              <Row centered>
                <Column  mobile={9} tablet={8} computer={5} className="text-right">
                  <img src={"./neko-01.svg"} className={LIB.getStyle('App-logo') +' twinkle'} alt="logo" />
                </Column>
                <Column mobile={7} tablet={8} computer={7}>
                  <div className={LIB.getStyle('title-banner')}>
                    <h1 className="text-center">強くなれ！</h1>
                    <h2 className="text-center">SFFISH。</h2>
                  </div>
                </Column>
                <Column centered mobile={10} tablet={10} computer={10} className="pb-30 pt-30">
                  <Grid centered>
                      <Column width={3} className="text-center">
                        <div className={LIB.getStyle('menu-item')}>About</div>
                      </Column>
                      <Column width={3} className="text-center">
                        <div className={LIB.getStyle('menu-item')}>Experience</div>
                      </Column>
                      <Column width={3} className="text-center">
                        <div className={LIB.getStyle('menu-item')}>Education</div>
                      </Column>
                      <Column width={3} className="text-center">
                        <div className={LIB.getStyle('menu-item')}>Hobbies</div>
                      </Column>
                      <Column width={3} className="text-center">
                        <div><FontAwesome name='rocket' /></div>
                        <FontAwesome name='facebook' />
                        <FontAwesome name='flickr' />
                      </Column>
                  </Grid>
                </Column>
                <Column centered mobile={10} tablet={10} computer={10} className="pb-30 pt-30">
                </Column>
              </Row>
            </Grid>
          </div>
          <div className={LIB.getStyle('App-header-2')}></div>
        {/*
          <div className={LIB.getStyle('App-header')}>
            <img src={"./neko-01.svg"} className={LIB.getStyle('App-logo')} alt="logo" />
            <h1>強くなれ！</h1>
          </div>
        */}
          <div className={LIB.getStyle('App-intro')} id="zone-scroll">
            <div className={LIB.getStyle('section')} id="zone-scroll-1">
              <div className ={LIB.getStyle('titlepic')} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*0.5).toString()+'px' }}>
              </div>
            </div>
             
            <div className={LIB.getStyle('section')}>
              <div className ={LIB.getStyle('titlepic')} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*3).toString()+'px' }}>
              </div>
            </div> 
            
            <div className={LIB.getStyle('section')}>
              <div className ={LIB.getStyle('titlepic')} style={{backgroundImage:'url(./neko-01.svg)', left:(this.state.catwalk*3).toString()+'px' }}>
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
