import axios from 'axios'

const RentOrderAxios = axios.create({
  baseURL: 'http://10.222.29.148:8090/rentOrders'
})

export const getOrders = () => {
  return RentOrderAxios.get()
}

export const addOrders = (param) => {
  return RentOrderAxios.post(param)
}

export const getOrderById = (id) => {
  return RentOrderAxios.get(`/${id}`)
}