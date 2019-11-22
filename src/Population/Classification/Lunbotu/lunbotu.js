import React from 'react'
import { Carousel } from 'antd';
var one=require('../../../Img/one.jpg');
var three=require('../../../Img/three.jpg');
var four=require('../../../Img/four.jpg')
var LunbotuPageCss=require('./lunbotu.css')
export default class LunbotuPage extends React.Component{
  state = {
    dotPosition: 'top',
  };
    render(){
        return(
            <div>
            <Carousel autoplay>
    <div>
      <h3><img src={one} width="600px"></img></h3>
    </div>
    <div>
      <h3><img src={three} width="600px"></img></h3>
    </div>
    <div>
      <h3><img src={four}></img></h3>
    </div>
    <div>
      <h3><img src={one}></img></h3>
    </div>

  </Carousel>
  </div>
  
        )
    }
}