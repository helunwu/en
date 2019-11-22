import React from 'react';
import {Icon} from 'antd'
import {Link} from 'react-router-dom' ;
var HeaderCss = require('./header.css');
export default class DefaultHeader extends React.Component {
    render() {
        return (<div className={HeaderCss.header}>
            <div className={HeaderCss.center}> 欢迎来到这里！ </div>
            <div className={HeaderCss.right}>
                    <Link to="/population"><Icon type="user" /></Link>
            </div>
            <div className={HeaderCss.right1}> <Link to ="/login"><Icon type="login" /></Link></div>
        </div>
        )
    }
}

