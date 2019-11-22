import React from 'react';
import { Button, notification } from 'antd';
var NotificationCss =require('./notification.css')
const openNotification = () => {
    notification.open({
      message: 'xxx公司',
      description:
        '恭喜你已被我公司聘用！请做好应职准备',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
export default class NotificationPage extends React.Component{
    render(){
        return(
            <div className={NotificationCss.button}><Button type="primary" onClick={openNotification}>
            消息
          </Button></div>
        )
    }
}