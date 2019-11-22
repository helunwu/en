import React from 'react';
import {Link} from 'react-router-dom';
 
var a = require('../../Img/7.png')
var Hotjobrightp2 =require('./hotjobrightp2.css')
export default class hotjobright extends React.Component{
    render(){
        return(
            <div>
                <div className={Hotjobrightp2.h}>
                    <img src={a} className={Hotjobrightp2.picture}></img>
                    </div>
                        <div className={Hotjobrightp2.m}>
                            <span className={Hotjobrightp2.size}><a href="/explain">&emsp; 销售经理</a></span>
                        <br></br>
                        <span className={Hotjobrightp2.salary}>&emsp; 4.5K-5.5K </span>
                        <br></br>
                        <span className={Hotjobrightp2.company}>&emsp; Bili企业</span>
                        </div>
            </div>
        )
    }
}