import axios from 'axios'

export default axios.create({
  baseURL: 'https://feeds.citibikenyc.com/stations/stations.json',
  params: { 
    params: "foo",
  }
})