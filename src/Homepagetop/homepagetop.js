import React from 'react';
import {Icon,Button, Dropdown,Menu} from 'antd';
import Notification from '../Homepagetop/Notification/notification'
import Drawerform from '../Homepagetop/Drawerform/drawerform'

var HomepagetopCss=require('./homepagetop.css');

export default class Homepagetop extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }
    logout=e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
    }
    render(){
      const menu = (
        <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            <Notification></Notification>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            <Drawerform></Drawerform>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
          <span onClick={this.logout}>  退出登录</span>
          </a>
        </Menu.Item>
      </Menu>
    
    )
        let userProfile=null;
       
       
        if(this.state.username!=null){
    
                userProfile =<div>
                    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      贺陈陈陈 <Icon type="down" />
    </a>
  </Dropdown>
                   
                </div>
        }else{
            userProfile=<a href="/login"><Icon type="team" />登录</a>
        }
        return(
        <div className={HomepagetopCss.option}>
            欢迎来到大学生网络兼职平台！
            <div className={HomepagetopCss.hh} >

            <li>{userProfile}</li>
            <li> <a href='/register'><Icon type="form" />注册</a></li>
            <li> <a href='/person' ><Icon type="user" />个人中心</a></li>
        </div>
        </div>
        )
    }
}