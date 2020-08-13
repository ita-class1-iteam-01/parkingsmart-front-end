const personalParkingPortList = (state = [], action) => {
    switch(action.type){
        case "SAVE_PERSONAL" : 
            return action.personalParkingPortList
        default :
            return state
    }
}

export default personalParkingPortList