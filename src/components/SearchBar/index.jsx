import React from 'react';
import SearchCity from '../SearchCity';
import CityPosition from '../CityPosition';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Button, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDisableSearchButton: true,
			isChooseDestination: false,
			isChooseDate: false,
			city: '',
			destination: {},
			currentHour: null
		};
	}

	chooseDestination = (data) => {
		this.setState(
			(state) => ({ destination: data, isChooseDestination: true }),
			() => {
				this.isComplete();
			}
		);
		console.log(data);
	};

	chooseCity = (data) => {
		this.setState({
			city: data
		});
	};

	onChange = (dates, dateStrings) => {
		this.setState(
			(state) => ({ isChooseDate: true }),
			() => {
				this.isComplete();
			}
		);
	};

	onOk = (data) => {
		this.setState({ chooseDate: data });
	};

	isComplete() {
		if (this.state.isChooseDate && this.state.isChooseDestination)
			this.setState({
				isDisableSearchButton: false
			});
	}

	range(start, end) {
		const result = [];
		for (let i = start; i < end; i++) {
			result.push(i);
		}
		return result;
	}

	disabledDate(current) {
		return current < moment().startOf('days');
	}

	disabledRangeTime = (current, type) => {
		if (type === 'start' && current !== null) {
			this.state.currentHour = current.hours();
			return {
				disabledHours: () => this.range(0, 60).splice(0, moment().hours())
			};
		}

		if (type === 'end' && current !== null) {
			if (current.toDate().toDateString() === moment().toDate().toDateString()) {
				return {
					disabledHours: () => this.range(0, 60).splice(0, this.state.currentHour + 1)
				};
			}
		}
	};

	render() {
		return (
			<Space>
				<CityPosition chooseCity={this.chooseCity} />
				<SearchCity chooseDestination={this.chooseDestination} city={this.state.city} />
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
		);
	}
}

export default SearchBar;
