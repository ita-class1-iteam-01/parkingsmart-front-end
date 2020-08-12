import React from 'react'
import PropTypes from 'prop-types'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ParkingLotList from '../ParkingLotList'
import { COMMAND_CODE, webSocket} from '../../websocket'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parkingLotList: [],
            socket: webSocket
        }
    }

    search = (data, dateList) => {
        this.state.socket.onmessage = (e) => {
            const response = JSON.parse(e.data)
            // 说明是登陆的返回消息
            if(response.command === COMMAND_CODE.PAGE_RESPONSE){
              this.setState({
                parkingLotList: JSON.parse(response.data).page
              }) 
            }
        }
        const parms =  {
            latitude: data.location.split(',')[1],
            longitude: data.location.split(',')[0],
            startTime: dateList[0],
            endTime: dateList[1]
        }
        const packet = {
            version:1,
            command:COMMAND_CODE.PAGE_REQUEST,
            data:JSON.stringify(parms)
        }
        this.state.socket.send(JSON.stringify(packet))
    }

    render() {
        return (
          <div>
            <SearchBarContainer search={this.search} />
            <ParkingLotList list={this.state.parkingLotList} history={this.props.history} />
          </div>
        )
    }
}

Book.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Book