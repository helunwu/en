import React from 'react';
import {Link} from 'react-router-dom';
 
var a = require('../../Img/6.png')
var Hotjobrightp1 =require('./hotjobrightp1.css')
export default class hotjobright extends React.Component{
    render(){
        return(
            <div>
                <div className={Hotjobrightp1.h}><img src={a} className={Hotjobrightp1.picture}></img></div>
                        <div className={Hotjobrightp1.m}><span className={Hotjobrightp1.size}><a href="/explain">&emsp; 人工智能</a></span>
                        <br></br>
                        <span className={Hotjobrightp1.salary}>&emsp; 7.0K-9.5K </span>
                        <br></br>
                        <span className={Hotjobrightp1.company}>&emsp; Balabala有限公司</span></div>
            </div>
        )
    }
}