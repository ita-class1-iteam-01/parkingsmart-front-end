import { AutoComplete } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import { inputPrompt } from '../../api/GaoDeApi'

const { Option } = AutoComplete

class SearchCity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tips: []
		}
	}

	onSelect = (e, data) => {
		this.props.chooseDestination(data.body)
	};

	onChange = (e) => {
		if (e === undefined) this.props.resetDestination()
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
      {this.state.tips.filter((item) => item.id.length !== 0).map((item) => {
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

SearchCity.propTypes = {
	city: PropTypes.string.isRequired,
	chooseDestination: PropTypes.func.isRequired,
	resetDestination : PropTypes.func.isRequired
}

export default SearchCity
