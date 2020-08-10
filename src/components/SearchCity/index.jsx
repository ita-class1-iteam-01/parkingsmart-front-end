import { AutoComplete } from 'antd'
import React from 'react'
import { inputPrompt } from '../../api/api'

const { Option } = AutoComplete

class SearchCity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tips: [],
    }
  }

	onSelect = (e,data) => {
		this.props.chooseDestination(data.body)
	};

	onChange = (e) => {
		inputPrompt(this.props.city, e).then((res) => {
			if (res.status === 200) {
				this.setState({
					tips: res.data.tips
				})
			}
		})
	};

	render() {
		return (
  <div>
    <AutoComplete
      style={{ width: 300 }}
      onSelect={this.onSelect}
      onChange={this.onChange}
      placeholder="input destination"
      allowClear
    >
      {this.state.tips.filter((item)=> item.id.length !== 0).map((item) => {
						return (
  <Option key={item.id} value={item.name} body={item}>
    {item.name}
  </Option>
)
					})}
    </AutoComplete>
  </div>
		)
	}
}

export default SearchCity
