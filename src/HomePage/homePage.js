import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import BujuonePage from '../HomePage/Bujuone/bujuone';

import BujutwoPage from './Bujutwo/bujutwo';
import BujuthreePage from '../HomePage/Bujuthree/bujuthree'
import BujufourPage from './Bujufour/bujufour';
var HomePageCss=require('./homePage.css') 
var one=require('../Img/one.jpg');
var three=require('../Img/three.jpg');
var four=require('../Img/four.jpg');
var five=require('../Img/1.jpg');

export default class HomePage extends React.Component{
    render(){
        
        return(       
             <div className={HomePageCss.homePage}>
                <div className={HomePageCss.bujufour}><BujufourPage/></div>
               <div className={HomePageCss.bujutwo}><BujutwoPage/></div>
               <div><BujuthreePage/></div>
               <div><BujuonePage/></div>
     </div>
        )
    }

}