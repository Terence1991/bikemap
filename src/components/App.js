import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';

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
      I have: {this.state.stations.length}
    </div>
  )
  }

}

export default App;