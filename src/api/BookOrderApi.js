import axios from 'axios'

const basicUrl="http://localhost:8090/bookOrders"

const getAll = () => {
    return axios.get(basicUrl)
}


export default {
    getAll
}
