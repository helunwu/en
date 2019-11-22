import React from 'react';
import { Cascader ,Icon} from 'antd';

var WorklocationCss = require('./worklocation.css')
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

export default class Worklocation extends React.Component{
    render(){
        return(
  <div className={WorklocationCss.w}>
    <Cascader size="large" options={options} onChange={onChange}/><Icon type="environment" size="large" className={WorklocationCss.work}/>
  </div>
        )
    }
}
