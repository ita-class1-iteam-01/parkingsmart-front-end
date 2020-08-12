import { connect } from 'react-redux'
// eslint-disable-next-line import/named
import {updateDate, updateAddress} from '../action/index'
import SearchBar from '../components/SearchBar'

const mapStateToProps = state => {
    return {
        dateList: state.dateList,
        address: state.address
    }
}

const mapDispatchToProps = dispatch => ({
    updateDate: (dateList) => dispatch(updateDate(dateList)),
    updateAddress: (address) => dispatch(updateAddress(address))
})

const SearchBarContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar)
export default SearchBarContainer