import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import Leisurejobcol1 from './Leisurejobcol1/leisurejobcol1';
import Homepagetop from '../Homepagetop/homepagetop';
import { Row, Col } from 'antd';
import MiddlePage from '../Homepage/Middle/middle';
import Line from '../Line/line';
import End from '../Homepage/End/end'


export default class leisurejob extends React.Component{
    render(){
        return(
            <div>
                <Homepagetop></Homepagetop>
                    <div>
                        <Row>
                        <Col span={18} push={6}>
                           <MiddlePage></MiddlePage>
                        </Col>
                        <Col span={6} pull={18}>
                            <Leisurejobcol1></Leisurejobcol1>
                        </Col>
                        </Row>
                    </div>
                    <div><Line></Line></div>
                    <div><End></End></div>
            </div>  
        )
    }
}  