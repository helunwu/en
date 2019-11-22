import React from 'react'
import {Form, Input, Icon, Button} from 'antd';
var ForgetCss = require('./forget.css');

export default class Forget extends React.Component{
    render(){
        return(
            <div>
                <div className={ForgetCss.aa}>
                    welcome to the Forget password screen
                </div>
                <div className={ForgetCss.bb}>
                    <div className={ForgetCss.cc}>
                        <Form>
                            
                            <Form.Item>
                                <div className={ForgetCss.a}>
                                <div className={ForgetCss.b}> <Input prefix={<Icon type="phone"></Icon>} placeholder="输入手机号码"></Input></div>
                               <div className={ForgetCss.c}><Button type="primary" className={ForgetCss.dd}>获取验证码</Button></div>
                            </div>
                            </Form.Item>
                           
                            <Form.Item>
                                <Input placeholder="短信验证码"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="edit"></Icon>} placeholder="输入新密码"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="edit"></Icon>} placeholder="确认新密码"></Input>
                            </Form.Item>
                            <Button type="primary" className={ForgetCss.ee}>确认</Button>
                        </Form>
                        <div className={ForgetCss.d}>
                            <div>客服联系电话:80082088<Icon type="phone" /></div>
                            <div>反馈邮箱：1234@.com<Icon type="calendar" /></div>
                            <div>联系QQ：123456789<Icon type="qq" /></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}