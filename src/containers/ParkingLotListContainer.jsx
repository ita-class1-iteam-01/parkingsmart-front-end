import { connect } from 'react-redux'
import ParkingLotList from '../components/ParkingLotList'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList
    }
}

const ParkingLotInfoContainer = connect(mapStateToProps)(ParkingLotList)
export default ParkingLotInfoContainer