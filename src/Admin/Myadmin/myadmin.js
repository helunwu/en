import React from 'react';
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react';
const { SubMenu } = Menu;
export default class MyadminPage extends React.Component{
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render(){
        return(
            <div><div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
              <a href="/admin/company"><Icon type="pie-chart" />
                <span>AHH</span></a> 
              </Menu.Item>
              <Menu.Item key="2">
              <a href="/admin/en">  <Icon type="desktop" />
               <span>xx</span></a>
              </Menu.Item>
              <Menu.Item key="3">
              <a href="/admin/company">  <Icon type="inbox" />
                <span>Option 3</span></a>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.Item key="5"><a href="/admin/">Option 5</a></Menu.Item>
                <Menu.Item key="6"><a>Option 6</a></Menu.Item>
                <Menu.Item key="7"><a>Option 7</a></Menu.Item>
                <Menu.Item key="8"><a>Option 8</a></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div></div>
        )
    }
}