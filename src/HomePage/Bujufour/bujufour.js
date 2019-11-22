import React from 'react';
import {Icon, Button} from 'antd';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import { Menu, Dropdown} from 'antd';
import XiaoPage from './My/Xiao/xiao';
import NotificationPage from '../../Notification/notification';
import LoginPage from '../../Login/login';
import MymassagePage from './My/Mymassage/mymassage';
var BujufourPageCss =require('./bujufour.css')



export default class BujufourPage extends React.Component{
  
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
            <a target="_blank" rel="noopener noreferrer" >
              <NotificationPage/>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
              <MymassagePage/>
            </a>
          </Menu.Item>
          <Menu.Item>
         
          <Button type="primary" onClick={this.logout}  >退出登录</Button>
            
          </Menu.Item>
        </Menu>
      );
        let userProfile=null;
       
       
        if(this.state.username!=null){
    
               userProfile =<div className={BujufourPageCss.location}>
                   
                   <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
            {this.state.username} 
            </a>
          </Dropdown>
          </div>
        }else{
            userProfile=<Link to="/login">登录</Link>
        }
        return(
            <div className={BujufourPageCss.bujufour}>
               <Row>
      <Col span={12}><div className={BujufourPageCss.aa}>欢迎来到陈俊良</div></Col>
      <Col span={12}>
          <div className={BujufourPageCss.bb}>
        
           
                     {userProfile}
                     
                     <li>  <Link to="/register">注册</Link></li>

                      <li><Link>个人中心</Link></li>
                      <li>  <Link to="/message" >留言</Link></li>
                  
                      
                      </div>
      </Col>
    </Row>
            </div>
        )
    }
}