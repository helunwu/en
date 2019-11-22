import React from 'react';

import { Drawer, Button } from 'antd';


export default class MymassagePage extends React.Component{
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
  render(){
      return(
        <div>
        <Button type="primary" onClick={this.showDrawer}>
          我
        </Button>
        <Drawer
          title="My massage"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
         陈敏你个哈儿
        </Drawer>
      </div>
      )
  }
}

