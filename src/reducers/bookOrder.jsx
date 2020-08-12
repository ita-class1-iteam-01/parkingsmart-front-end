const bookOrderList = (state = [], action) => {
    switch(action.type){
        case "GET_ALL_BOOK_ORDERS" : 
            return action.bookOrders
        default :
            return state
    }
}

export default bookOrderList