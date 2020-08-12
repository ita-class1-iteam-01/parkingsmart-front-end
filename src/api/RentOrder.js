import axios from 'axios'

const RentOrderAxios = axios.create({
  baseURL: 'http://localhost:8090/rentOrders'
})

const getOrders = () => {
  return RentOrderAxios.get()
}

export default getOrders