import React from 'react';
import { Drawer } from 'antd';
import {Upload, Button, Icon } from 'antd';

var a = require('../Drawerform/7.png')
export default class DrawerForm extends React.Component{
    state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <span onClick={this.showDrawer}>
          个人信息
        </span>
        <Drawer
          title="User Info"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <img src={a}></img>
          <p>UserName：贺陈陈陈</p>
          <p>Telephone：18364873723</p>
          <p>Live：成都-金堂</p>
          <p>Address：西希望学院6号公寓1栋</p>
          <p>Remark：Fighting!Fighting!</p>
          <p>Work experience：Lorem ipsum dolor sit amet, consectetur adipiscing
               elit. Sed nonne merninisti licere mihi ista 
              probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button>
      <Icon type="upload" /> 上传简历
    </Button>
  </Upload>
        </Drawer>
      </div>
    );
  }
}
