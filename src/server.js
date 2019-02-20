const express = require('express');
const axios = require('axios');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  console.log('HOME PAGE')
});

app.get('/stations', (req, res) => {
  axios.get('https://feeds.citibikenyc.com/stations/stations.json', {
    query: 'new york',
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
  .then(stations => {
    res.json(stations.data.stationBeanList);
  })
  .catch(e => console.error(e));
})

app.listen(5000, () => {
  console.log('server running on 5000')
})