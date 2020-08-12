import React from 'react'
import PropTypes from 'prop-types'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ParkingLotListContainer from '../../containers/ParkingLotListContainer'
import { COMMAND_CODE, webSocket} from '../../websocket'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parkingLotList: props.parkingLotList.length === 0 ? [] : props.parkingLotList,
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
              this.props.saveParkingLotList(this.state.parkingLotList)
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
            <ParkingLotListContainer list={this.state.parkingLotList} history={this.props.history} />
          </div>
        )
    }
}

Book.propTypes = {
  parkingLotList: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  saveParkingLotList: PropTypes.func.isRequired
}

export default Book