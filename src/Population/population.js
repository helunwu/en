import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
var PopulationPageCss=require('./population.css')
export default class PopulationPage extends React.Component{
    render(){
        return(
            <div className={PopulationPageCss.population}>
            <div className={PopulationPageCss.popu} >
    <Row type="flex">
      <Col span={6} order={4}>
      <Link to="/classification" >分类</Link>
      </Col>
      <Col span={6} order={3}>
      <Link to="/shoppcar">购物车</Link>
      </Col>
      <Col span={6} order={2}>
      <Link to="/service">客服</Link>
      </Col>
      <Col span={6} order={1}>
      <Link to ="/personal">我的</Link>
      </Col>
    </Row>
  </div>
  </div>







             
        )
    }
}