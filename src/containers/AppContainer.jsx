import { connect } from 'react-redux'
import App from '../App'
import {saveParkingLotList, savePersonal} from '../action/index'

const mapStateToProps = state => {
    return {
      parkingLotList: state.parkingLotList,
      personalParkingPortList: state.personalParkingPortList
    }
}
const mapDispatchToProps = dispatch => ({
  saveParkingLotList: (parkingLotList) => dispatch(saveParkingLotList(parkingLotList)),
  savePersonalParkingPortList: (list) => {
      dispatch(savePersonal(list))
    }
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer