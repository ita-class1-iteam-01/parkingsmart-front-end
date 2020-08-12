import axios from 'axios'

const baseURL = '/api'

export const getBookOrderById  = (id) => {
  return axios.get(`${baseURL}/bookOrders/${id}`)
}

export const newBookOrder  = (bookOrder) => {
  return axios.post(`${baseURL}/bookOrders`, bookOrder)
}

export const newRentOrder = function (rentOrder) {
  return axios.post(`${baseURL}/rentOrders`, rentOrder)
}