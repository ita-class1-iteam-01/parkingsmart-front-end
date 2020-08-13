/* eslint-disable object-shorthand */
export const updateDate = (dateList) => {
    return{
        type: "UPDATE_DATE",
        dateList: dateList
    }
}

export const saveParkingLotList = (parkingLotList) => {
    return{
        type: "SAVE_PARKING_LOT_LIST",
        parkingLotList: parkingLotList
    }
}

export const updateAddress = (address) => {
    return{
        type: "UPDATE_ADDRESS",
        address: address
    }
}

export const savePersonal = (personalParkingPortList) => {
    return{
        type: "SAVE_PERSONAL",
        personalParkingPortList: personalParkingPortList
    }
}