import React from 'react'
import End from '../Homepage/End/end'
import {Link,NavLink} from 'react-router-dom'

var AboutUsCSS= require('./aboutus.css')

export default class aboutus extends React.Component{
    render(){
        return(
            <div className={AboutUsCSS.aboutus}> 
            <div className={AboutUsCSS.aboutusA}>
            <h2>关于我们</h2>
            <div className={AboutUsCSS.aboutusB}></div>
            <a>项目名称：大学生网络兼职平台</a>
            <div className={AboutUsCSS.aboutusC}></div>
            <div className={AboutUsCSS.aboutusD}>
            <div className={AboutUsCSS.aboutusE}></div>
            <h3>队伍成员：贺轮武、陈敏、陈俊良、陈鑫</h3>
        
            </div>
            <div className={AboutUsCSS.aboutusF}></div>
            <div className={AboutUsCSS.aboutusG}></div>
            <div className={AboutUsCSS.aboutusH}></div>
            <div className={AboutUsCSS.aboutusI}></div>
            </div>
            <div><End></End></div>
            </div>
            
        )
    }
    }