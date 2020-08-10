import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Space, Button } from 'antd'
import SearchCity from '../SearchCity'
import CityPosition from '../CityPosition'

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <Space>
//         <CityPosition />
//         <SearchCity />
//         <Button type="primary" icon={<SearchOutlined />}>Search</Button>
//       </Space>
//     )
//   }
// }

function SearchBar() {
  return (
    <Space>
      <CityPosition />
      <SearchCity />
      <Button type="primary" icon={<SearchOutlined />}>Search</Button>
    </Space>
  )
}

export default SearchBar
