import React from 'react';
import SearchCity from '../SearchCity'
import CityPosition from '../CityPosition'
import { SearchOutlined } from '@ant-design/icons';
import { Space,Button } from 'antd';

class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isShowSearchButton: false
        }
    }

    render(){
        return (
            <Space>
                <CityPosition/>
                <SearchCity/>
                <Button type="primary" icon={<SearchOutlined />} >Search</Button>
            </Space>
        )
    }

}

export default SearchBar