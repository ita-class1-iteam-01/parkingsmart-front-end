import { connect } from 'react-redux'
// eslint-disable-next-line import/named
// eslint-disable-next-line import/no-cycle
import BookOrder from '../components/BookOrder'
import getAllBookOrders from '../action/index'

const mapStateToProps = state => {
    console.log(state);
    return {
        bookOrderList: state.bookOrderList
    }
}

const mapDispatchToProps = dispatch => ({
    addBookOrders: (bookOrders) => dispatch(getAllBookOrders(bookOrders))
})

const BookOrderContainer = connect(mapStateToProps,mapDispatchToProps)(BookOrder)
export default BookOrderContainer