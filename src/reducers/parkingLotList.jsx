const parkingLotList = (state = [], action) => {
    switch(action.type){
        case "SAVE_PARKING_LOT_LIST" : 
            return action.parkingLotList
        default :
            return state
    }
}

export default parkingLotList