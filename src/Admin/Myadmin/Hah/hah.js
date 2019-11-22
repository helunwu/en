import React from 'react';

import ComPage from '../Company/company'
var HahPageCss=require('./hah.css')
export default class HahPage extends React.Component{
    render(){
        return(
            <div>
                <div className={HahPageCss.a}><ComPage/></div>
            </div>
        )
    }
}