import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import StationList from './StationList'

class App extends React.Component {
  state = {stations: []}

  onTermSubmit = (term) => {
    axios.get('http://localhost:5000/stations', {
      query: term,
    }).then(res => {
      this.setState({stations: res.data})
    })
  }

  render() {
    return (
    <div>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <StationList stations={this.state.stations}/>
    </div>
  )
  }

}

export default App;