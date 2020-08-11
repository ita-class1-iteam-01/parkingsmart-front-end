const dateList = (state = [], action) => {
    switch(action.type){
        case "UPDATE_DATE" : 
            return action.dateList
        default :
            return state
    }
}

export default dateList