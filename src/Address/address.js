import React from 'react';
import {Button} from 'antd';
import RightPage from './Right/right';
import {Link} from 'react-router-dom';
import { size } from 'react-dom';
import {Icon,Input} from 'antd';
import Worklocation from './Worklocation/worklocation';


var AddressCss = require('./address.css')
var AddCss = require('./add.css')
var AddressedCss = require('./addressed.css')
export default class address extends React.Component{
    render(){
        return(
            <div className={AddressCss.add}>
                <div className={AddressCss.address}>
                    <div className={AddCss.add}>
                        <span className={AddCss.a}>个人中心</span>
                        <RightPage></RightPage>
                    </div>
                    <div className={AddCss.add}>
                        <Input className={AddressedCss.addressed}prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="联系电话"/>
                    </div>
                    <div className={AddCss.add}>
                        <Input className={AddressedCss.b}prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="求职意向"/>
                    </div>
                    <div className={AddCss.add}>
                        <Input className={AddressedCss.b}prefix={<Icon type="like" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="兼职信誉度"/>
                    </div>
                    <div className={AddCss.add}>
                        <Worklocation></Worklocation>
                    </div>
                    <div className={AddCss.add}>
                        <Button.Group size={size} className={AddressedCss.c}>
                        <Button type="primary">
                            <Icon type="left" />
                            已领取兼职
                        </Button>
                        <Button type="primary">
                            已完成兼职
                            <Icon type="right" />
                        </Button>
                        </Button.Group>
                        <br></br>
                        <span>
                            <Link to="/homepage">返回首页</Link>
                            <Link to="/changepassword" className={AddCss.ad}>修改密码</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}