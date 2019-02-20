import React from 'react'
import SearchBar from './SearchBar'
import bikeapi from '../api/bikeapi'
import axios from 'axios';

class App extends React.Component {

  onTermSubmit = (term) => {
    axios.get('http://localhost:5000/stations', {
      query: term,
    }).then(res => {
      console.log('RES ON CLIENT: ', res)
    })

  }

  render() {
    return (
    <div>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
    </div>
  )
  }

}

export default App;