import { connect } from 'react-redux'
import {saveParkingLotList, savePersonal} from '../action/index'
import Book from '../components/Book'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList,
      personalParkingPortList: state.personalParkingPortList,
      dateList: state.dateList,
        address: state.address
    }
}
const mapDispatchToProps = dispatch => ({
  saveParkingLotList: (parkingLotList) => dispatch(saveParkingLotList(parkingLotList)),
  savePersonalParkingPortList: (list) => dispatch(savePersonal(list))
})

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book)
export default BookContainer