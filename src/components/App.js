import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Comonent {

  onTermSubmit = (term) => {
    console.log(term)
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