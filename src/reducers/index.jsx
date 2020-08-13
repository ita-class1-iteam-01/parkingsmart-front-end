import { combineReducers } from 'redux'
import dateList from './date'
import address from './address'
import parkingLotList from './parkingLotList'
import personalParkingPortList from './personalParkingPortList'

const reducer = combineReducers({
    dateList,
    address,
    parkingLotList,
    personalParkingPortList
})
export default reducer