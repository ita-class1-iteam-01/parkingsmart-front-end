import React from 'react';
import 'antd/dist/antd.css';
import { Cascader, Spin } from 'antd';
import { getLocation } from '../../api/api';
import {ConvertPinyin} from '../../utils/ConvertPinyin'

class CityPositon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: ''
		};
	}

	componentDidMount() {
		getLocation().then((res) => {
            if(res.status === 200){
                this.setState({
                    city: ConvertPinyin(res.data.city.slice(0,res.data.city.length-1)).withUC
                })
            }
        });
	}

	displayRender(label) {
		return label[label.length - 1];
	}

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



const options = [
	{
		value: 'guangdong',
		label: 'Guangdong',
		children: [
			{
				value: 'guangzhou',
				label: 'Guangzhou'
			},
			{
				value: 'shaoguan',
				label: 'Shaoguan'
			},
			{
				value: 'shenzhen',
				label: 'Shenzhen'
			},
			{
				value: 'zhuhai',
				label: 'Zhuhai'
			},
			{
				value: 'shantou',
				label: 'Shantou'
			},
			{
				value: 'fosan',
				label: 'Fosan'
			},
			{
				value: 'jiangmen',
				label: 'Jiangmen'
			}
		]
	},
	{
		value: 'guangxi',
		label: 'Guangxi',
		children: [
			{
				value: 'nanning',
				label: 'Nanning'
			}
		]
	}
];