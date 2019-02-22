import React from 'react'
import styled from 'styled-components';
import StationItem from './StationItem'

// Declare your styled component here, give it css
const StyledStationList = styled.ul`
  width: 300px;
  list-style: none;
  margin-top: 0;
  border: 1px solid #D0CFCE;
  padding: 0;

  li:first-child {
    border-top: none;
  }

  li:last-child {
     border-bottom: none;
  }
`;


const StationList = ({stations, selectStation, nextPage, pageSkip }) => {
  const renderedList = stations.map((station) => {
    const renderItem = station.testStation === false && station.statusValue === "In Service";

    if (renderItem) {
      return <StationItem key={station.id} station={station} selectStation={selectStation} nextPage={nextPage} pageSkip={pageSkip} />
    }
    return null;
  })

  return (
    <StyledStationList>{renderedList}</StyledStationList>
  )
}


export default StationList; 