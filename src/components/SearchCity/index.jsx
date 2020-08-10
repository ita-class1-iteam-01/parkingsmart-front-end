import { AutoComplete } from 'antd';
import { inputPrompt } from '../../api/api';
import React from 'react';

const { Option } = AutoComplete;

class SearchCity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tips: []
		};
	}

	onSelect = (e, data) => {
		this.props.chooseDestination(data.body);
	};

	onChange = (e) => {
		if (e === undefined) 
			this.props.resetDestination();
		inputPrompt(this.props.city, e).then((res) => {
			if (res.status === 200) {
				this.setState({
					tips: res.data.tips
				});
			}
		});
	};

	render() {
		return (
			<div>
				<AutoComplete
					style={{ width: 300 }}
					onSelect={this.onSelect}
					onChange={this.onChange}
					placeholder="input destination"
					allowClear={true}
				>
					{this.state.tips.filter((item) => item.id.length !== 0).map((item) => {
						return (
							<Option key={item.id} value={item.name} body={item}>
								{item.name}
							</Option>
						);
					})}
				</AutoComplete>
			</div>
		);
	}
}

export default SearchCity;
