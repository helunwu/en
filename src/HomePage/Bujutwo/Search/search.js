import React from 'react';

import { Input } from 'antd';
const { Search } = Input;
var SearchPageCss=require('./search.css');

export default class SearchPage extends React.Component{
    render(){
        return(
            <div className={SearchPageCss.search}>
          <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
            </div>
        )
    }
}