import React from 'react';
import { Divider ,Icon} from 'antd';
import Hotjobrightp1 from './Hotjobrightp1/hotjobrightp1';
import Hotjobrightp2 from './Hotjobrightp2/hotjobrightp2';
import Hotjobrightp3 from './Hotjobrightp3/hotjobrightp3';

var HotjobCss = require ('./hotjob.css')
export default class hotjob extends React.Component{
    render(){
        return(
            <div>
              <div className={HotjobCss.t}>
                <span className={HotjobCss.title}><Icon type="fund" theme="filled" />&ensp;热门职位</span>
              </div>
              <div>
                <p><Hotjobrightp1></Hotjobrightp1></p>
                <Divider />
                <p><Hotjobrightp2></Hotjobrightp2></p>
                <Divider dashed />
                <p><Hotjobrightp3></Hotjobrightp3></p>
              </div>
          </div>
        )
    }
}