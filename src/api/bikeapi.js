import axios from 'axios'

export default axios.create({
  baseURL: 'https://feeds.citibikenyc.com',
  crossdomain: true
})