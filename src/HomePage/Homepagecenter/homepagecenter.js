import React from 'react';
import { Divider } from 'antd';
import Homepagecenterp1 from './Homepagecenterp1/homepagecenterp1';
import Homepagecenterp2 from './Homepagecenterp2/homepagecenterp2';
import Homepagecenterp3 from './Homepagecenterp3/homepagecenterp3';


var HomepagecenterCss=require('./homepagecenter.css')
export default class homepagecenter extends React.Component{
    render(){
        return(
            <div>
                <div className={HomepagecenterCss.homepagecenter}>
                    <p><Homepagecenterp1></Homepagecenterp1></p>
                    <Divider />
                    <p><Homepagecenterp2></Homepagecenterp2></p>
                    <Divider dashed />
                    <p><Homepagecenterp3></Homepagecenterp3></p>
                </div>
                <div className={HomepagecenterCss.homepagecenter}>
                    <p><Homepagecenterp1></Homepagecenterp1></p>
                    <Divider />
                    <p><Homepagecenterp2></Homepagecenterp2></p>
                    <Divider dashed />
                    <p><Homepagecenterp3></Homepagecenterp3></p>
                </div>
            </div>
        )
    }
}