import React from 'react';
import { Avatar } from 'antd';

var RightPageCss =require('./right.css')
export default class RightPage extends React.Component{
    render(){
        return(
            <div className={RightPageCss.right}>
               <div className={RightPageCss.top}> <Avatar size={104} icon="user" />
                    <div className={RightPageCss.t}>
                        <span className={RightPageCss.text}>姓名: balabala</span>
                        <br></br>
                        <span className={RightPageCss.text}>账号：8208208820</span>
                    </div>
               </div>
            </div>
        )
    }
}