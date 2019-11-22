import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

var InputCss = require('./input.css')
export default class InputPage extends React.Component{
    render(){
        return(
            <div className={InputCss.input}><Search
            placeholder="请输入关键字"
            enterButton="Search"
            size="large"
            style={{ width: 500 }}
            onSearch={value => console.log(value)}
          />
      </div>
        )
    }
}