import React from 'react'
import styled from 'styled-components';
import StationItem from './StationItem'

// Declare your styled component here, give it css
const StyledStationList = styled.div`
  width: 300px;
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