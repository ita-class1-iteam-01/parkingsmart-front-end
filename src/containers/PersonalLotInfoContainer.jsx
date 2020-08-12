import { connect } from 'react-redux'
import moment from 'moment'
import PersonalCarportDetail from '../components/PersonalCarportDetail'

const mapStateToProps = state => {
    return {
      startTime: moment(moment(state.dateList[0]).format('YYYY-MM-DD HH:00:00')).valueOf(),
      endTime: moment(moment(state.dateList[1]).format('YYYY-MM-DD HH:00:00')).valueOf()
    }
}

const PersonalLotInfoContainer = connect(mapStateToProps)(PersonalCarportDetail)
export default PersonalLotInfoContainer