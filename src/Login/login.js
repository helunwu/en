import React from 'react';
import {Form, Input, Icon,Button} from 'antd';
import{Link} from 'react-router-dom';
import HomePage from '../HomePage/homePage';
import {Redirect} from 'react'
import MyPage from '../HomePage/Bujufour/My/my';

var LoginCss=require('./login.css')


export default class LoginPage extends React.Component {
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
        if(this.state.username=='123456'&&this.state.password=='123'){
        alert('登录成功');
         
        window.localStorage.setItem("username","陈敏")
        window.localStorage.setItem("token","11111")
        this.props.history.push('/homePage')
        }else{
            alert('登录失败');
        }
        //访问服务器

     

//  console.log(window.localStorage.getItem("username"))
    }
    render() {
        let username
        let userProfile=null;
        if(window.localStorage.getItem("username")!=null){
         userProfile ={username}
        }else{
            userProfile=<Link to="/login"></Link>
        }
        return (
            <div> 
            <div  className={LoginCss.login}>
            Welcome to the login screen
            </div>
          
             <div className={LoginCss.a}>
             <div className={LoginCss.lll}>
            Never Give Up! Fighting！Fighting！
            </div>
                <div className={LoginCss.div}>
                <Form >
                    <Form.Item>
                        <Input prefix={<Icon type="user"></Icon>} placeholder="用户名"  name="username" id="username" value={this.state.username} onChange={this.changeValue}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock"></Icon>} placeholder="密码" name="password" id="password" value={this.state.password} onChange={this.changeValue}></Input>
                    </Form.Item>
                    <Form.Item >
                        <Link to="/forget">忘记密码</Link>
                      <Button type="primary"  className={LoginCss.btn} onClick={this.login} >登录</Button>
                        <Link to="/register"><Button shape="circle" type="primary" className={LoginCss.Item} >注</Button></Link> 
                         
                    </Form.Item>
                </Form> 
                
                </div>
                <div className={LoginCss.haha}>
                    <div className={LoginCss.hhh}>
                     强大的招聘平台
                </div>
                <div className={LoginCss.kkk}>
                    收获职业机会 
                    </div>
                    <div className={LoginCss.ttt}>
                    打造职业形象
                    </div>
             <div className={LoginCss.nnn}>
                提供快捷、高效、可靠地网上招聘
               <div className={LoginCss.eee}>
                好机会主动找上你，成就职业成功
                <div className={LoginCss.ooo}>
                创建职业档案，持续展示自己的优势 
                </div>
               </div>
                </div>
               
                </div>
             </div>
            
            </div>
        
        )
    }
}
