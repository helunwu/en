import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import Hotjob from '../Hotjob/hotjob';

var a = require('../Img/1.jpg')
var aa = require('../Img/2.jpg')
var aaa = require('../Img/3.jpg')
var aaaa = require('../Img/4.jpg')
var aaaaa = require('../Img/hlw.gif')
var LunbotuPageCss = require('./lunbotu.css')
export default class LunbotuPage extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={5}><div className={LunbotuPageCss.hh}><img src={aaaaa} width="300px" height="350px"></img></div></Col>
                    <Col span={14}>
                    <Carousel autoplay>
                        <div>
                            <h3><img src={a} className={LunbotuPageCss.picture}></img></h3>
                        </div>
                        <div>
                            <h3><img src={aa} className={LunbotuPageCss.picture}></img></h3>
                        </div>
                        <div>
                            <h3><img src={aaa} className={LunbotuPageCss.picture}></img></h3>
                        </div>
                        <div>
                            <h3><img src={aaaa} className={LunbotuPageCss.picture}></img></h3>
                        </div>
                    </Carousel>
                    </Col>
                    <Col span={5} className={LunbotuPageCss.right}><Hotjob></Hotjob></Col>
                </Row>

            </div>
        )
    }
}