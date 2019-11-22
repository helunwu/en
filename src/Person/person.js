import React from 'react';
import { Row, Col } from 'antd';
import Address from '../Address/address';
import Backgroundimg from '../Backgroundimg/backgroundimg';


export default class Person extends React.Component{
    render(){
        return(
            <div>
                <Row>
      <Col span={18} push={6}>
        <Address></Address>
      </Col>
      <Col span={6} pull={18}>
        <Backgroundimg></Backgroundimg>
      </Col>
    </Row>

            </div>
        )
    }
}