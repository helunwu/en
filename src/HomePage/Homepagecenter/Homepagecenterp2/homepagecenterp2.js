import React from 'react';
import {Link} from 'react-router-dom';

var a = require('../../Img/7.png')
var Homepagecenterp2Css=require('./homepagecenterp2.css')
export default class homepagecenterp1 extends React.Component{
    render(){
        return(
            <div>
                <div className={Homepagecenterp2Css.h}>
                    <div>
                        <img src={a} className={Homepagecenterp2Css.picture}></img>
                        <span className={Homepagecenterp2Css.size}><a href="/explain">&emsp; 软件工程师 &ensp; [深圳市]</a></span>
                        <span className={Homepagecenterp2Css.company}>希望集团</span>
                        <br></br>
                        <span className={Homepagecenterp2Css.salary}>5K-6.5K </span>
                        <span>&emsp;经验2-5年/本科及以上 &emsp; 招聘人数:6 &emsp; 更新时间：2019-7-5</span>
                    </div>
                </div>
            </div>
        )
    }
}