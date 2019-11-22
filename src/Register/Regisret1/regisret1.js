import React from 'react';
import { Carousel } from 'antd';

var Regiser1Css = require('./regiser1.css')
export default class regist1 extends React.Component{
    render(){
        return(
            <div>
                <Carousel autoplay>
    <div>
      <h3 className={Regiser1Css.rrr}>Welcome to the registration screen</h3>
    </div>
    <div>
      <h3 className={Regiser1Css.rrr}>Welcome to the registration screen</h3>
    </div>
    <div>
      <h3 className={Regiser1Css.rrr}>Welcome to the registration screen</h3>
    </div>
    <div>
      <h3 className={Regiser1Css.rrr}>Welcome to the registration screen</h3>
    </div>
  </Carousel>
            </div>
        )
    }
}