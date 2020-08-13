import React from 'react'
import PropTypes from 'prop-types'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ParkingLotListContainer from '../../containers/ParkingLotListContainer'
import { COMMAND_CODE, webSocket} from '../../websocket'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socket: webSocket
        }
    }

    

    searchPersonal = () => {
    }

    search = (data, dateList) => {
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
            <ParkingLotListContainer 
              searchPersonal={this.searchPersonal} 
              personalParkingPortList={this.props.personalParkingPortList===undefined? [] : this.props.personalParkingPortList} 
              list={this.props.parkingLotList.length === 0 ? [] : this.props.parkingLotList}
              history={this.props.history}
            />
          </div>
        )
    }
}

Book.propTypes = {
  parkingLotList: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  personalParkingPortList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Book