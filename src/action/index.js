/* eslint-disable object-shorthand */
const updateDate = (dateList) => {
    return{
        type: "UPDATE_DATE",
        dateList: dateList
    }
}

const getAllBookOrders = (bookOrders) => {
    return{
        type: "GET_ALL_BOOK_ORDERS",
        bookOrders: bookOrders
    }
}

export default {updateDate,getAllBookOrders}