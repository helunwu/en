import React from 'react';
import {Link} from 'react-router-dom';
 
var a = require('../../Img/8.png')
var Hotjobrightp3 =require('./hotjobrightp3.css')
export default class hotjobright extends React.Component{
    render(){
        return(
            <div>
                <div className={Hotjobrightp3.h}>
                    <img src={a} className={Hotjobrightp3.picture}></img>
                    </div>
                        <div className={Hotjobrightp3.m}>
                            <span className={Hotjobrightp3.size}><a href="/explain">&emsp; 建筑设计师</a></span>
                        <br></br>
                        <span className={Hotjobrightp3.salary}>&emsp; 5.0K-7.0K </span>
                        <br></br>
                        <span className={Hotjobrightp3.company}>&emsp; 拓新集团</span>
                        </div>
            </div>
        )
    }
}