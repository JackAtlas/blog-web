import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 50000
})

export default service
