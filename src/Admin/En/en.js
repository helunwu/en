
import React from 'react';
import ComPage from './Com/com';
var CompanyPageCss=require('./company.css')
export default class CompanyPage extends React.Component{
    render(){
        return(
            <div className={CompanyPageCss.a}><ComPage/></div>
        )
    }
}