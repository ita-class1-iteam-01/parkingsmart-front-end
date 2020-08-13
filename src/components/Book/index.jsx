import React from 'react'
import PropTypes from 'prop-types'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ParkingLotListContainer from '../../containers/ParkingLotListContainer'
import { COMMAND_CODE, webSocket} from '../../websocket'
import './index.css'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socket: webSocket,
            searched: false,
            key: "1",
            parms: {}
        }
    }

    componentDidMount() {
      if (this.props.personalParkingPortList.length !== 0 || this.props.parkingLotList.length !== 0) {
        this.setState({
          searched: true
        })
      }
    }

    keyChange = (key) => {
      this.setState({
        key
      })
      if (key === '2' && this.props.personalParkingPortList.length === 0) {
        const packet = {
          version:1,
          command: COMMAND_CODE.PAGE_PERSONAL_REQUEST,
          data:JSON.stringify(this.state.parms)
        }
        this.state.socket.send(JSON.stringify(packet))
        this.setState({
          searched: true
        })
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
        this.setState({
          parms
        })
        const packet = {
            version:1,
            command: this.state.key === '1' ? COMMAND_CODE.PAGE_REQUEST : COMMAND_CODE.PAGE_PERSONAL_REQUEST,
            data:JSON.stringify(parms)
        }
        this.state.socket.send(JSON.stringify(packet))
        this.setState({
          searched: true
        })
    }

    render() {
        return (
          <div className="book">
            <SearchBarContainer search={this.search} />
            <ParkingLotListContainer
              keyChange={this.keyChange} 
              searched={this.state.searched}
              searchPersonal={this.searchPersonal} 
              personalParkingPortList={this.props.personalParkingPortList===undefined? [] : 
                this.props.personalParkingPortList} 
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