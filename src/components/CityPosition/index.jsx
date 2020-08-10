import React from 'react';
import 'antd/dist/antd.css';
import { Cascader, Spin } from 'antd';
import { getLocation } from '../../api/api';
import { ConvertPinyin } from '../../utils/ConvertPinyin';
import { options } from '../../constant/city';

class CityPositon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: ''
		};
	}

	componentDidMount() {
		getLocation().then((res) => {
			if (res.status === 200) {
				this.setState({
					city: ConvertPinyin(res.data.city.slice(0, res.data.city.length - 1)).withUC
				});
				this.props.chooseCity(ConvertPinyin(res.data.city.slice(0, res.data.city.length - 1)).word);
			}
		});
	}

	displayRender(label) {
		return label[label.length - 1];
	}

	onChange = (value) => {
		this.props.chooseCity(value[1]);
	};

	render() {
		if (this.state.city === '') return <Spin />;

		return (
			<Cascader
				options={options}
				expandTrigger="hover"
				defaultValue={[ this.state.city ]}
				displayRender={this.displayRender}
				allowClear={false}
				onChange={this.onChange}
			/>
		);
	}
}

export default CityPositon;
