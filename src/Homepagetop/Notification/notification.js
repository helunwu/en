import React from 'react';
import { Button, notification } from 'antd';
import { Badge, Icon } from 'antd'

const openNotification = () => {
    notification.open({
      message: '消息记录',
      description:
        '欢迎登录大学生校园兼职网站，希望您找到满意的工作',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      duration:2,
    });
  };
  
export default class Notification extends React.Component{
    render(){
        return(
            <div>
              <div>
                  <Badge count={1} showZero>
                    <a href="#" className="head-example" />
                  </Badge>
                  <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                    <a href="#" className="head-example" />
                  </Badge>
              </div>
                <span onClick={openNotification}>
                    查看消息
                </span>            
            </div>
        )
    }
}