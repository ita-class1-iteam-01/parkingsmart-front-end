import axios from 'axios'

const baseURL = '/api'

export const getBookOrderById  = (id) => {
  return axios.get(`${baseURL}/bookOrders/${id}`)
}

export const newBookOrder  = (bookOrder) => {
  return axios.post(`${baseURL}/bookOrders`, bookOrder)
}