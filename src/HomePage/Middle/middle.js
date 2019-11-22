import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'antd';


var MiddleCss = require('./middle.css')
export default class MiddlePage extends React.Component{
    render(){
        return(
            <div className={MiddleCss.Haa} >
                <Button shape="round" type="primary" className={MiddleCss.Ha}>
                    <a href ='/homepage'>首页</a>
                </Button>
                <Button shape="round" type="primary" className={MiddleCss.H}>
                    <a href ='/leisurejob'>兼职</a>
                </Button>
                <Button shape="round" type="primary" className={MiddleCss.H}>
                    <a href ='/leisurejob'>网上兼职</a>
                </Button>
                <Button shape="round" type="primary" className={MiddleCss.H}>
                    <a href='/leisurejob'>高薪工作</a>
                </Button>
                <Button shape="round" type="primary" className={MiddleCss.H}>
                    <a href='/leisurejob'>找企业</a>
                </Button>
            </div>
        )
    }
}