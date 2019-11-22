import React from 'react';
import {Link} from 'react-router-dom';
var  PersonalPageCss =require('./personal.css') 
export default class PersonalPage extends React.Component{
    render(){
        return(
            <div className={PersonalPageCss.personal}>
                <div className={PersonalPageCss.person}>
               
            <Link to="/login">登录</Link>
            <span>/</span> 
            <Link to="/">注册</Link>
            
            </div>
            </div>
        )
    }
}