import React from 'react';
import {Link} from 'react-router-dom';

var a = require('../../Img/6.png')
var Homepagecenterp3Css=require('./homepagecenterp3.css')
export default class homepagecenterp1 extends React.Component{
    render(){
        return(
            <div>
                <div className={Homepagecenterp3Css.h}>
                    <div>
                        <img src={a} className={Homepagecenterp3Css.picture}></img>
                        <span className={Homepagecenterp3Css.size}><a href="/explain">&emsp; 招聘实习生 &ensp; [重庆市]</a></span>
                        <span className={Homepagecenterp3Css.company}>阿里巴巴</span>
                        <br></br>
                        <span className={Homepagecenterp3Css.salary}>3K-4K </span>
                        <span>&emsp;经验不限/大专及以上 &emsp; 招聘人数:20 &emsp; 更新时间：2019-7-4</span>
                    </div>
                </div>
            </div>
        )
    }
}