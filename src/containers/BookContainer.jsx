import { connect } from 'react-redux'
import Book from '../components/Book'
import {saveParkingLotList} from '../action/index'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList
    }
}
const mapDispatchToProps = dispatch => ({
  saveParkingLotList: (parkingLotList) => dispatch(saveParkingLotList(parkingLotList))
})

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book)
export default BookContainer