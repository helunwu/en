import { Row, Col } from 'antd';

import React from 'react';
import {Link} from 'react-router-dom';
import SearchPage from './Search/search';
var BujutwoPageCss =require('./bujutwo.css');
export default class BujutwoPage extends React.Component{
    render(){
        return(
            <div className={BujutwoPageCss.aa}>
    <Row type="flex">
      <Col span={6} order={4}>
      
      </Col>
      <Col span={6} order={3}>
        <div className={BujutwoPageCss.log}><SearchPage/></div>
      </Col>
      <Col span={6} order={2}>
       <div className={BujutwoPageCss.search} > </div>
      </Col>
      <Col span={6} order={1}>
       <div className={BujutwoPageCss.tubiao}>
           <div><Link to="/homePage">兼职网</Link></div>
           <span>/</span>
           <div><Link to="/homePage">专业人才</Link></div>
       </div>
      </Col>
    </Row>
  </div>
        )
    }
}