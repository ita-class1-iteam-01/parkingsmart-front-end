import axios from 'axios'

const basicUrl="http://10.222.29.148:8020/seckills"

const newSeckillOrder = (seckillOrder) =>{
    return axios.post(`${basicUrl}`,seckillOrder)
  }

export default newSeckillOrder