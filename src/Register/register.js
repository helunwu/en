import React from 'react';
import {Form,Input,Icon,Button,Tooltip,Cascader,Select,Row,Col,Checkbox,AutoComplete} from 'antd';
var RegisterCss = require('./register.css')


export default  class Register extends React.Component{
    state = {
        loading: false,
        iconLoading: false,
      };
    
      enterLoading = () => {
        this.setState({ loading: true });
      };
    
      enterIconLoading = () => {
        this.setState({ iconLoading: true });
      };
    
    render(){
        return(
        <div>
            <div className={RegisterCss.register}>
            Welcome to the registration screen
            </div>
            <div className={RegisterCss.b}>
          <div className={RegisterCss.c}>
              <Form>
                  <Form.Item>
                      <Input prefix={<Icon type="phone"></Icon>}placeholder="请输入手机号码"></Input>
                  </Form.Item>
                  <Form.Item>
                  <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名作为账号"></Input>
                  </Form.Item>
                  <Form.Item>
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入6位数以上的密码(字母、数字、符号)"></Input>
                  </Form.Item>
                <Form.Item>
                   <Input prefix={<Icon type="lock"></Icon>} placeholder="请确认密码">
                   </Input>
                </Form.Item>
                <Form.Item>
                   <Button type="primary" icon="poweroff"  loading={this.state.iconLoading}  onClick={this.enterIconLoading} className={RegisterCss.d}>注册</Button>
                </Form.Item>
              </Form>
          </div>
            </div>
        </div>
        )
    }
}
