import React from 'react'
import PropTypes from 'prop-types'
import Navigator from './components/Navigator'
import './App.css'
import { COMMAND_CODE, webSocket} from './websocket'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: webSocket
    }
  }

  componentDidMount() {
    this.state.socket.onmessage = (e) => {
      console.log(e.data)
          const response = JSON.parse(e.data)
          // 说明是登陆的返回消息
          if(response.command === COMMAND_CODE.PAGE_RESPONSE){
            this.props.saveParkingLotList(JSON.parse(response.data).page)
          }
      }
  }

  render() {
    return (
      <div className="App">
        <Navigator />
      </div>
    )
  }
}

App.propTypes = {
  saveParkingLotList: PropTypes.func.isRequired
}

export default App
