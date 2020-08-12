import { combineReducers } from 'redux'
import dateList from './date'
import address from './address'
import parkingLotList from './parkingLotList'

const reducer = combineReducers({
    dateList,
    address,
    parkingLotList
})
export default reducer