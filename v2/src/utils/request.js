import axios from 'axios'

const service = axios.create({
  timeout: 50000
})

export default service