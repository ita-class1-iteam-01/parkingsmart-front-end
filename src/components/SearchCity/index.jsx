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

	onSelect = (data) => {
		console.log('onSelect', data);
	};

	onChange = (e) => {
		inputPrompt('zhuhai', e).then((res) => {
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
					{this.state.tips.map((item) => {
						return (<Option key={item.id} value={item.name}>
							{item.name}
                        </Option>);
					})}
				</AutoComplete>
			</div>
		);
	}
}

export default SearchCity;
