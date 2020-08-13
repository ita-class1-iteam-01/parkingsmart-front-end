import { connect } from 'react-redux'
import App from '../App'
import {saveParkingLotList} from '../action/index'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList
    }
}
const mapDispatchToProps = dispatch => ({
  saveParkingLotList: (parkingLotList) => dispatch(saveParkingLotList(parkingLotList))
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer