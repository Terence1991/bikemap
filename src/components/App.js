import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import styled from 'styled-components';
import StationList from './StationList';
import StationDetail from './StationDetail'
import Header from './Header';

const StationsWrapper = styled.div`
  display: flex;
  border-color: black; 
`

class App extends React.Component {
  state = {stations: [], selectedStation: {}}

  onTermSubmit = (term) => {
    axios.get('http://localhost:5000/stations', {
      query: term,
    }).then(res => {
      this.setState({stations: res.data})
    })
  }

  selectStation = (station) => {
    this.setState({ selectedStation: station })
  }

  render() {
    const { selectedStation } = this.state;

    return (
    <div>
      <Header/>
      <SearchBar onTermSubmit={this.onTermSubmit}/>

      <StationsWrapper>
        <StationList stations={this.state.stations} selectStation={this.selectStation} />
         <StationDetail station={this.state.selectedStation}/>
        </StationsWrapper>
    </div>
  )
  }

}

export default App;