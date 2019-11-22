import React from 'react';
import {Link} from 'react'
import { Row, Col } from 'antd';
import LunbotuPage from '../../Population/Classification/Lunbotu/lunbotu';
var  BujuthreePageCss=require('./bujuthree.css');
var one=require('../../Img/one.jpg');

export default class BujuthreePage extends React.Component{
    render(){
        return( 
             <div>
            <Row>
            <Col span={12}><div>haha</div><div>就业</div></Col>
            <Col span={12}>你看</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>
              <div className={BujuthreePageCss.location}><LunbotuPage/></div></Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}><img src={one}></img></Col>
          </Row>
          </div>
          )
        }
    }