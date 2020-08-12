/* eslint-disable object-shorthand */
const updateDate = (dateList) => {
    return{
        type: "UPDATE_DATE",
        dateList: dateList
    }
}

export default updateDate