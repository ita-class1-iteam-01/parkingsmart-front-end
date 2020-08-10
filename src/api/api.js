import axios from 'axios'

const GaoDeUserKey = 'f4423551e65b3bdd60345faefeb5b13b'
const MapAxios = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
})

export const inputPrompt = (city,keyword) => {
    return MapAxios.get(`/assistant/inputtips?
      key=${GaoDeUserKey}&keywords=${keyword}&city=${city}&datatype=all&citylimit=true`)
}

export const getLocation = () => MapAxios.get(`/ip?key=${GaoDeUserKey}`)
