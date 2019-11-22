import React from 'react';

import{Link} from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
var AdminloginPageCss=require('./adminlogin.css')

export default class AdminloginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
          username:'',
          password:'',
        }
    }

    changeValue=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login =e=>{
        if(this.state.username=='123'&&this.state.password=='123'){
        alert('登录成功');
        
        this.props.history.push('/admin')
        }else{
            alert('登录失败');
        }
        //访问服务器
 
 
 console.log(window.localStorage.getItem("username"))
    }
    render(){
        let username
        let userProfile=null;
        if(window.localStorage.getItem("username")!=null){
    userProfile =<Link to="/admin">{username}</Link>
        }else{
            userProfile=<Link to="/adminlogin"></Link>
        }
        return(
            <div className={AdminloginPageCss.cc}>
                <div className={AdminloginPageCss.dd}>
            <div className={ AdminloginPageCss.aa}>
            
            <Form >
                <Form.Item>
                    <Input.Password prefix={<Icon type="user"></Icon>} placeholder="Admin" name="username" id="username" value={this.state.username} onChange={this.changeValue} />
                </Form.Item>
                <Form.Item>
                    <Input.Password  prefix={<Icon type="lock"></Icon>} placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.changeValue} />
                </Form.Item>
                <Form.Item >
                    
                    <div className={AdminloginPageCss.bb}>
                    
                    <Button type="primary" onClick={this.login} >登录</Button>
                   
                    </div>
                   
                </Form.Item>
            </Form> 
            
            </div>
            </div>
            </div>
        )
    }
}