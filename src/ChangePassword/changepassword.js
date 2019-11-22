import React from 'react'
import {Form, Input, Icon, Button} from 'antd';
import Register1 from '../Register/Regisret1/regisret1'

var ChangePasswordCss = require('./changepassword.css');

export default class ChangePassword extends React.Component{
    render(){
        return(
            <div>
                <div className={ChangePasswordCss.a}>
                <Register1></Register1>
                </div>
                <div className={ChangePasswordCss.b}>
                        <div className={ChangePasswordCss.o}>
                        Where there's a will, there's a way
                        </div>
                    <div className={ChangePasswordCss.c}>
                        <Form>
                            <Form.Item>
                                <Input prefix={<Icon type="form"></Icon>} placeholder="原密码"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder="新密码" prefix={<Icon type="lock"></Icon>}/>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder="确认密码" prefix={<Icon type="lock"></Icon>}/>
                            </Form.Item>
                            <Form.Item>
                               <Button type="primary" className={ChangePasswordCss.d}>确认</Button>
                            </Form.Item>
                        </Form>

                    </div>
                    <div className={ChangePasswordCss.ee}>
                    <div className={ChangePasswordCss.e}>
                    客服联系电话:80082088<Icon type="phone" />
                    </div>
                    <div className={ChangePasswordCss.f}>
                    反馈邮箱：1234@.com<Icon type="calendar" />
                    </div>
                    <div className={ChangePasswordCss.g}>
                    联系QQ：123456789<Icon type="qq" />
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}