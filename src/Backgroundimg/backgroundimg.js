import React from 'react';
import {Link} from 'react-router-dom';

var a = require('./Img/1.jpg')
var BackgroundimgCss = require('./backgroundimg.css')
export default class backgroundimg extends React.Component{
    render(){
        return(
            <Link to="homepage"><img src={a} className={BackgroundimgCss.picture}></img></Link>
        )
    }
}