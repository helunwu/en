import React from 'react';
import { Select,Button,Icon,Pagination} from 'antd';

const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
  }  

var LineCss= require('./line.css');
export default class Line extends React.Component{
    render(){
        return(
            <div className={LineCss.line}>
                <div className={LineCss.ddd}>
                    <div className={LineCss.dd}>
            <span className={LineCss.ss}>
                <i className={LineCss.i1}></i>
                <p className={LineCss.ii}>兼职招聘</p>
            </span>
            <div className={LineCss.di}>
         <Button  className={LineCss.di3} type="link"> 热度<Icon type="caret-down" theme="filled"/></Button>
    <Button type="link" disabled>
    </Button>


         </div>
         <div>
         <Button  className={LineCss.di4} type="link">发布时间<Icon type="caret-down" theme="filled"/></Button>
    <Button type="link" disabled>
    </Button>
         </div>
         <div>
         <Button  className={LineCss.di5} type="link">更新时间<Icon type="caret-down" theme="filled"/></Button>
    <Button type="link" disabled>
    </Button>
         </div>
            <div>
      <Select  className={LineCss.D} defaultValue="结算方式" style={{ width: 200 } } onChange={handleChange}>
      <OptGroup label="结算方式">
      <Option value="lucy">日结</Option>
      <Option value="jack">周结</Option>
      <Option value="tom">月结</Option>
      <Option value="Yiminghe">完工结</Option>
    </OptGroup>
  </Select>
  </div>
      
         </div>
 
            </div>
            <div className={LineCss.di6}>
          <a href="/explain" className={LineCss.a1}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i2}>180元 /小时</i>
          <i className={LineCss.i3}>日结</i>
          <div className={LineCss.dd1}>
            <div>工作地点：成都-金堂</div>
            <div className={LineCss.dd2}>招聘人数：6人</div>
            <div className={LineCss.dd3}>所属类型：普工</div>
            <div className={LineCss.dd4}>更新日期：2019.07.07</div>
          </div>
      </div>
          <div className={LineCss.di7}>
          <a href="/explain" className={LineCss.a2}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i4}>180元 /小时</i>
          <i className={LineCss.i5}>日结</i>
          <div className={LineCss.dd01}>
            <div className={LineCss.dd00}>工作地点：成都-金堂</div>
            <div className={LineCss.dd02}>招聘人数：6人</div>
            <div className={LineCss.dd03}>所属类型：普工</div>
            <div className={LineCss.dd04}>更新日期：2019.07.07</div>
          </div>
        </div>
          <div className={LineCss.di8}>
          <a href="/explain" className={LineCss.a02}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i04}>180元 /小时</i>
          <i className={LineCss.i05}>日结</i>
          <div className={LineCss.dd0001}>
            <div className={LineCss.dd001}>工作地点：成都-金堂</div>
            <div className={LineCss.dd002}>招聘人数：6人</div>
            <div className={LineCss.dd003}>所属类型：普工</div>
            <div className={LineCss.dd004}>更新日期：2019.07.07</div>
          </div>
         </div>
          <div className={LineCss.di8}>
          <a href="/explain" className={LineCss.a02}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i04}>180元 /小时</i>
          <i className={LineCss.i05}>日结</i>
          <div className={LineCss.dd0001}>
            <div className={LineCss.dd001}>工作地点：成都-金堂</div>
            <div className={LineCss.dd002}>招聘人数：6人</div>
            <div className={LineCss.dd003}>所属类型：普工</div>
            <div className={LineCss.dd004}>更新日期：2019.07.07</div>
          </div>
          </div>
          <div className={LineCss.di8}>
          <a href="/explain" className={LineCss.a02}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i04}>180元 /小时</i>
          <i className={LineCss.i05}>日结</i>
          <div className={LineCss.dd0001}>
            <div className={LineCss.dd001}>工作地点：成都-金堂</div>
            <div className={LineCss.dd002}>招聘人数：6人</div>
            <div className={LineCss.dd003}>所属类型：普工</div>
            <div className={LineCss.dd004}>更新日期：2019.07.07</div>
          </div>
          </div>
          <div className={LineCss.di8}>
          <a href="explain" className={LineCss.a02}>XXXX龙虾店,急聘员工</a>
          <i className={LineCss.i04}>180元 /小时</i>
          <i className={LineCss.i05}>日结</i>
          <div className={LineCss.dd0001}>
            <div className={LineCss.dd001}>工作地点：成都-金堂</div>
            <div className={LineCss.dd002}>招聘人数：6人</div>
            <div className={LineCss.dd003}>所属类型：普工</div>
            <div className={LineCss.dd004}>更新日期：2019.07.07</div>
          </div>
          </div>
          <div className={LineCss.pa}>
            <a href="leisurejob">
          <Pagination defaultCurrent={1} total={50} />
          </a>
          </div>
                </div>
           
        )
    }
}