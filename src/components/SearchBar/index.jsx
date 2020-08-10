import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Space, Button } from 'antd'
import SearchCity from '../SearchCity'
import CityPosition from '../CityPosition'

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isDisableSearchButton: true,
			city: ''
			// destination: {}
		}
	}

	chooseDestination = () => {
		// this.setState({
		// 	destination: data
		// })
		// console.log(data)
	};

	chooseCity = (data) => {
		this.setState({
			city: data
		})
	};

	render() {
		return (
  <Space>
    <CityPosition chooseCity={this.chooseCity} />
    <SearchCity chooseDestination={this.chooseDestination} city={this.state.city} />
    <Button
      type="primary"
      icon={<SearchOutlined />}
      disabled={this.state.isDisableSearchButton}
    >
      Search
    </Button>
  </Space>
		)
	}
}

export default SearchBar
