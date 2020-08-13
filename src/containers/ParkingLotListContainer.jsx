import { connect } from 'react-redux'
import ParkingLotList from '../components/ParkingLotList'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList,
      personalParkingPortList: state.personalParkingPortList
    }
}

const ParkingLotInfoContainer = connect(mapStateToProps)(ParkingLotList)
export default ParkingLotInfoContainer