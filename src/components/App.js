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
  pageSkip = 12;
  state = { stations: [], selectedStation: {}, page: 0 }

  onTermSubmit = (term) => {
    axios.get('http://localhost:5000/stations', {
      query: term,
    }).then(res => {
      this.setState({ stations: res.data })
    })
  }

  selectStation = (station) => {
    this.setState({ selectedStation: station })
  }
  
  nextPage = (n) => {
    const { stations, page } = this.state;

    const stopCondition = ((page + n) > stations.length)
      ? true
      : false;

    if (stopCondition) {
      return this.setState({ page: 0 })
    }

    this.setState({
      page: page + n
    })
  }


  render() {
    const { selectedStation, stations, page } = this.state;
    const slice = stations.slice(page, page + this.pageSkip);
    console.log(page, stations.length)

    return (
    <div>
      <Header/>
      <SearchBar onTermSubmit={this.onTermSubmit}/>

      <StationsWrapper>
         <StationList stations={slice} selectStation={this.selectStation} nextPage={this.nextPage} pageSkip={this.pageSkip} />
         <StationDetail station={this.state.selectedStation}/>
      </StationsWrapper>
    </div>
  )
  }

}

export default App;