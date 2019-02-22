import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import styled from 'styled-components';
import StationList from './StationList';
import StationDetail from './StationDetail'
import Header from './Header';
import { setAllStations, nextPage, previousPage, RESULTS_PER_PAGE } from '../reducers/searchReducer';
import { connect } from 'react-redux'

const AppWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`
const Conatainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 0 24px;
`
const PaginationBtnGroup = styled.div`
  display: flex;
`
const PaginationBtn = styled.div`
  cursor: pointer;
  margin-right: 8px;
  padding: 4px 8px;
  display: inline-block;
  border:1px solid #4c97da;
  transition: all 0.2s ease-in-out;
  border-radius:3px;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`

class App extends React.Component {
  state = { 
    selectedStation: null,  
  }

  componentDidMount() {
    axios.get('http://localhost:5000/stations', {
    }).then(res => {
      this.props.setAllStations(res.data)
    });
  }

  selectStation = (station) => {
    this.setState({ selectedStation: station })
  }
  

  renderPagitionBtns = () => {
    const { stations, currentPage, nextPage, previousPage } = this.props;
    const maxCondtion = currentPage * RESULTS_PER_PAGE >= stations.length;
    const minCondition = !(currentPage * RESULTS_PER_PAGE);

    if (minCondition && stations.length > RESULTS_PER_PAGE) {
      return <PaginationBtn onClick={nextPage}>Next</PaginationBtn>
    } else  if (!minCondition && !maxCondtion) {
      return (
        <PaginationBtnGroup>
          <PaginationBtn onClick={previousPage}>Previous</PaginationBtn>
          <PaginationBtn onClick={nextPage}>Next</PaginationBtn>
        </PaginationBtnGroup>
      )
    } else if (maxCondtion && !minCondition) {
      return <PaginationBtn onClick={previousPage}>Previous</PaginationBtn>
    } else {
      return null;
    }
  }

  render() {
    const { selectedStation } = this.state;
    const { authenicated, stations, paginationResults } = this.props;

    return (
      <AppWrapper>
        <Header />
        {
          !authenicated
            ? <div>In order to use the app you need to sign in.</div>
            : (
              <Conatainer>
                <SearchContainer>
                  <SearchBar />
                  {
                    stations.length
                      ? (
                        <div>
                          <StationList 
                            stations={paginationResults}
                            selectStation={this.selectStation}
                          />
                          {this.renderPagitionBtns()}
                        </div>
                      ) : <div>No Results</div>
                  }
                </SearchContainer>
                <DetailsContainer>
                  {
                    stations.length && selectedStation
                      ? <StationDetail station={selectedStation}/>
                      : null
                  }
                </DetailsContainer>
              </Conatainer>
            )
        }
      </AppWrapper>
    )
  }
}

const mapStateToProps = ({ auth, search }) =>  {
  return { 
    authenicated: auth.isSignedIn,
    stations: search.stations,
    totalStations: search.totalStations,
    currentPage: search.currentPage,
    paginationResults: search.paginationResults
  }
};

export default connect(mapStateToProps, {
  setAllStations,
  previousPage, 
  nextPage
})(App);