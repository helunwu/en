import React from 'react';
import {Link} from 'react-router-dom';

var a = require('../../Img/8.png')
var Homepagecenterp1Css=require('./homepagecenterp1.css')
export default class homepagecenterp1 extends React.Component{
    render(){
        return(
            <div>
                <div className={Homepagecenterp1Css.h}>
                    <div>
                        <img src={a} className={Homepagecenterp1Css.picture}></img>
                        <span className={Homepagecenterp1Css.size}><a href="/explain">&emsp; 办公室文员 &ensp; [成都市]</a></span>
                        <span className={Homepagecenterp1Css.company}>Balabala有限公司</span>
                        <br></br>
                        <span className={Homepagecenterp1Css.salary}>3.5K-4K </span>
                        <span>&emsp;经验1-3年/大专及以上 &emsp; 招聘人数:12 &emsp; 更新时间：2019-7-6</span>
                    </div>
                </div>
            </div>
        )
    }
}