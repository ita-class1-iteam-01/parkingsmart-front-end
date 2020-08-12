import axios from 'axios'

const MQAddress = '/MQapi'

const producer = (data, queueName = 'test') => {
  return axios.post(`${MQAddress}/${queueName}?type=queue`,{...data},{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic aXRhMDEtdGVhbTAxOnN0cm9uZ3Bhc3N3b3Jk'
    }
  })
}

export default producer