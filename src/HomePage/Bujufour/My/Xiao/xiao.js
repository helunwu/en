import React from 'react';
import { Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
export default class XiaoPage extends React.Component{
    render(){
        return(
            <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">消息</a>
          </Popconfirm>
        )
    }
}