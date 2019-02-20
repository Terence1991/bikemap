import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import StationList from './StationList'
import Header from './Header'

class App extends React.Component {
  state = {stations: []}

  onTermSubmit = (term) => {
    axios.get('http://localhost:5000/stations', {
      query: term,
    }).then(res => {
      this.setState({stations: res.data})
    })
  }

  selectedStation(station) {
    console.log('SELECTED STATION: ', station)
  }

  render() {
    return (
    <div>
      <Header/>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <StationList stations={this.state.stations} selectedStation={this.selectedStation} />
    </div>
  )
  }

}

export default App;