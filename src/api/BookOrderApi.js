import axios from 'axios'

const basicUrl="http://10.222.29.148:8090/bookOrders"

const getAll = () => {
    return axios.get(basicUrl)
}


export default {
    getAll
}
