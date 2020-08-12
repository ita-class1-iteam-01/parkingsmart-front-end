import { combineReducers } from 'redux'
import dateList from './date'
import bookOrderList from './bookOrder'

const reducer = combineReducers({
    dateList,
    bookOrderList
})
export default reducer