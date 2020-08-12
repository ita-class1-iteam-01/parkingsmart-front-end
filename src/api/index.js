import axios from 'axios'

const baseURL = '/api'

export const getBookOrderById  = (id) => {
  return axios.get(`${baseURL}/bookOrders/${id}`)
}

export const newBookOrder  = (bookOrder) => {
  return axios.post(`${baseURL}/bookOrders`, bookOrder)
}

export const newPersonalBookOrder = (bookOrder,rentOrderId) =>{
  return axios.post(`${baseURL}/bookOrders/personal/${rentOrderId}`,bookOrder)
}

export const newRentOrder = (rentOrder)  => {
  return axios.post(`${baseURL}/rentOrders`, rentOrder)
}