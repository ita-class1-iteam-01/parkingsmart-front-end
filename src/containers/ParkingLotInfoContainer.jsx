import { connect } from 'react-redux'
import moment from 'moment'
import ParkingLotInfo from '../components/ParkingLotInfo'

const mapStateToProps = state => {
    return {
      startTime: moment(moment(state.dateList[0]).format('YYYY-MM-DD HH:00:00')).valueOf(),
      endTime: moment(moment(state.dateList[1]).format('YYYY-MM-DD HH:00:00')).valueOf(),
      address: state.address
    }
}

const ParkingLotInfoContainer = connect(mapStateToProps)(ParkingLotInfo)
export default ParkingLotInfoContainer