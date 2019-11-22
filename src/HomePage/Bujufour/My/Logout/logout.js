import React from 'react';
import {Botton} from 'antd';

export default class LogoutPage extends React.Component{
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
    }
    render(){
        let userProfile=null;
       
       
        if(this.state.username!=null){
    
               userProfile =<div>{this.state.username}
              <div> <Button type="primary" onClick={this.logout}  >退出登录</Button></div> </div>
        }
        return(
            {userProfile}
        )
    }
}