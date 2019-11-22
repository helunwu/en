import React from 'react';

import LunbotuPage from './Lunbotu/lunbotu';
var one=require('../../Img/one.jpg');
var three=require('../../Img/three.jpg');
var four=require('../../Img/four.jpg')

var ClassificationCss=require('./classification.css')

export default class ClassificationPage extends React.Component{
    render(){
        return(
            <div className={ClassificationCss.classification}>
               <div className={ClassificationCss.lunbotu}> <LunbotuPage/></div>
             
              
            </div>
        )
    }
}