import React from 'react';
import { Icon } from 'antd';
import MessagePage from '../Message/message';
import { Row, Col } from 'antd';
import MiddlePage from '../Homepage/Middle/middle';
import Leisurejobcol1 from '../Leisurejob/Leisurejobcol1/leisurejobcol1'
import Homepagetop from '../Homepagetop/homepagetop';
import { Rate } from 'antd';
import End from '../Homepage/End/end';
import { Button } from 'antd';


var ExplainCss = require('./explain.css');
var h=require('../Img/9.jpg')
export default class Explain extends React.Component{

    render(){
        return(
            <div>
            <div><Homepagetop></Homepagetop></div>
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
            <div className={ExplainCss.explain}>
            <div>
            <h4 className={ExplainCss.h4}>
                急聘兼职---急急急急急急！
            </h4>
            <p className={ExplainCss.p1}>
            <span className={ExplainCss.s1}>88.00元/天</span>
            日结 | 网络兼职 | 不限人数 &emsp; 更新时间：
            <span className={ExplainCss.s2}>2019-6-30</span> &emsp;
            招聘ID：7777
            </p>
            <div>
               <p className={ExplainCss.p2}>
                   <em className={ExplainCss.e1}>性别要求：不限</em>
                   <br></br>
                   <em className={ExplainCss.e1}>工作地点：成都金堂</em>
                   <br></br>
                   <em className={ExplainCss.e1}>有效时间：2019-7-27</em>
                   <br></br>
                   <em className={ExplainCss.e1}>工作时段：周一到周五</em>
                   <br></br>
                   <em className={ExplainCss.e3}>招聘商家：XXXX龙虾店</em>
                   <br></br>
                   <em className={ExplainCss.e3}>营业执照：123456XXXXTUT12</em>
               </p>
            </div>
            <br></br>
            <div className={ExplainCss.d1}>  
                <p className={ExplainCss.s3}></p>
                    职位详情
            </div>
            <div className={ExplainCss.d2}>
            <p className={ExplainCss.p4}>急需洗碗工与清洁员多名，吃苦耐劳优先！</p>
            <br></br>
            </div>
            <p className={ExplainCss.p5}>想加入的兼职的，直接加群咨询，不懂得有客服说明！</p>
           <p className={ExplainCss.p7}> 工资3天结一次，无需任何押金、担保，无需任何文凭，需要自己的身份证!</p>
           <br></br>
            <p className={ExplainCss.p6}>群号1：<span className={ExplainCss.s4}>123456XXX1</span>
             群号2：<span className={ExplainCss.s4}>987654XXX1</span></p>
            <br></br>
            </div>
            <div>
                <h4 className={ExplainCss.h1}>联系方式</h4>
                <Icon type="smile" theme="twoTone" /> 
                <i className={ExplainCss.I1}>贺某某&emsp;</i>
                <Icon type="phone" theme="filled" />
                <i className={ExplainCss.I1}>135463XXX1232</i>
            </div>
            <div className={ExplainCss.hhh}><MessagePage/></div>
            <div className={ExplainCss.d3}>
                特别提醒：
                <br/>
                1.该兼职网站不收取任何单位及个人保证金，请勿相信以本网站名义担保的兼职工作！
                <br/>
                2.正规兼职招聘网公司不收取任何费用的，如果有收取费用兼职招聘视为骗子，请到客户端举报，谢谢合作！
            </div>
            </div>
            <div><img src={h} className={ExplainCss.hhhh}></img></div>
            <Button shape="round" className={ExplainCss.H} type="primary">申请报名</Button>
            <div className={ExplainCss.hhhh}>评价：<Rate /></div>
            <div className={ExplainCss.hhhhh}><End></End></div>
            </div>
        )
    }
}