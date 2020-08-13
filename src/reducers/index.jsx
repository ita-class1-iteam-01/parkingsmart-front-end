import { combineReducers } from 'redux'
import dateList from './date'
import address from './address'
import parkingLotList from './parkingLotList'
import savePersonal from './savePersonal'

const reducer = combineReducers({
    dateList,
    address,
    parkingLotList,
    savePersonal
})
export default reducer