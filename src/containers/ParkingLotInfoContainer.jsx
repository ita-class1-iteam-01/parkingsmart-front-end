import { connect } from 'react-redux'
import ParkingLotInfo from '../components/ParkingLotInfo'

const mapStateToProps = state => {
    return {
      startTime: state.dateList[0],
      endTime: state.dateList[1]
    }
}

const ParkingLotInfoContainer = connect(mapStateToProps)(ParkingLotInfo)
export default ParkingLotInfoContainer