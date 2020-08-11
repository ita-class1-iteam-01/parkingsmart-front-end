/* eslint-disable react/no-access-state-in-setstate */
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Space, Button, DatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import CityPosition from '../CityPosition'
import SearchCity from '../SearchCity'

const { RangePicker } = DatePicker

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isDisableSearchButton: true,
			isChooseDestination: false,
			isChooseDate: false,
			city: '',
			currentHour: null
		}
	}

	chooseDestination = () => {
		this.setState(
			() => ({ isChooseDestination: true }),
			() => {
				this.isComplete()
			}
		)
	};

	resetDestination = () => {
		this.setState(
			() => ({ isDisableSearchButton: true, isChooseDestination: false }),
			() => {
				this.isComplete()
			}
		)
	};

	chooseCity = (data) => {
		this.setState({
			city: data
		})
	};

	onChange = (dates) => {
		let status = true
		if (dates === null) status = false
		this.setState(
			() => ({ isChooseDate: status }),
			() => {
				this.isComplete()
				this.props.updateDate(dates)
			}
		)
	};

	disabledRangeTime = (current, type) => {
		if (current === null)
			return {
				disabledHours: () => this.range(0, 24)
			}

		if (type === 'start' && current !== null) {
			this.state.currentHour = current.hours()
			return {
				disabledHours: () => this.range(0, 60).splice(0, moment().hours())
			}
		}

		if (type === 'end' && current !== null) {
			if (current.toDate().toDateString() === moment().toDate().toDateString()) {
				return {
					disabledHours: () => this.range(0, 60).splice(0, this.state.currentHour + 1)
				}
			}
		}
		return null
	};

	disabledDate = (current) => {
		return current < moment().startOf('days')
	};

	range = (start, end) => {
		const result = []
		for (let i = start; i < end; i++) {
			result.push(i)
		}
		return result
	};

	isComplete = () =>{
		this.setState({
			isDisableSearchButton: !(this.state.isChooseDate && this.state.isChooseDestination)
		});
	}
	
	render() {
		return (
  <Space>
    <CityPosition chooseCity={this.chooseCity} />
    <SearchCity
      chooseDestination={this.chooseDestination}
      city={this.state.city}
      resetDestination={this.resetDestination}
    />
    <RangePicker
      disabledDate={this.disabledDate}
      disabledTime={this.disabledRangeTime}
      showTime={{}}
      format="YYYY-MM-DD HH:00:00"
      onChange={this.onChange}
      onOk={this.onOk}
    />
    <Button type="primary" icon={<SearchOutlined />} disabled={this.state.isDisableSearchButton}>
      Search
    </Button>
  </Space>
		)
	}
}

SearchBar.propTypes = {
	updateDate: PropTypes.func.isRequired
}

export default SearchBar
