import { connect } from 'react-redux'
// eslint-disable-next-line import/named
import updateDate from '../action/index'
import SearchBar from '../components/SearchBar'

const mapStateToProps = state => {
    return {
        dateList: state.dateList
    }
}

const mapDispatchToProps = dispatch => ({
    updateDate: (dateList) => dispatch(updateDate(dateList))
})

const dateContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar)
export default dateContainer