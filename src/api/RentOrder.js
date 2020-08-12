import axios from 'axios'

const RentOrderAxios = axios.create({
  baseURL: 'http://localhost:8090/rentOrders'
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