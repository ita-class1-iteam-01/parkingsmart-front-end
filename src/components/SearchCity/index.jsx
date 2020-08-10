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

	onSelect = () => {
	};

	onChange = (e) => {
	  inputPrompt('zhuhai', e).then((res) => {
	    if (res.status === 200) {
	      this.setState({
	        tips: res.data.tips,
	      })
	    }
	  })
	};

	render() {
		const { tips } = this.state
	  return (
  <div>
    <AutoComplete
      style={{ width: 300 }}
      onSelect={this.onSelect}
      onChange={this.onChange}
      placeholder="input destination"
      allowClear
    >
      {tips.map((item) => (
        <Option key={item.id} value={item.name}>
          {item.name}
        </Option>
      ))}
    </AutoComplete>
  </div>
	  )
	}
}

export default SearchCity
