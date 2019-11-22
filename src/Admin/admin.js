import React from 'react';
import {Link} from 'react';
import {Button} from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MyadminPage from './Myadmin/myadmin';
import CompanyPage from './Myadmin/Company/company';
import EnPage from './Myadmin/En/en'



var AdminPageCss=require('./admin.css')

export default class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }
    logout=e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
        this.props.history.push('/adminlogin')
    }
    render(){
        let userProfile=null;
       
       
        if(this.state.username!=null){
    
               userProfile =<div >
                   
                  
            {this.state.username} 
           
          
          </div>
        }else{
            userProfile=<Link to="/adminlogin">登录</Link>
        }
        return(
            <div className={AdminPageCss.cc}>
             
                <div className={AdminPageCss.HH}><div className={AdminPageCss.aa}><div><Button type="primary" onClick={this.logout}  >退出登录</Button></div></div><MyadminPage/></div>
                <BrowserRouter>
                <Switch>
                    <Route path="/admin/company" component={CompanyPage}></Route>
                    <Route path="/admin/en" component={EnPage}> </Route>
                    <Route path=''></Route>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}