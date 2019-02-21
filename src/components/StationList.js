import React from 'react'
import styled from 'styled-components';
import StationItem from './StationItem'

// Declare your styled component here, give it css
const StyledStationList = styled.div`
  border-color: red;
  width: 100px;
`;


const StationList = ({stations, selectStation }) => {
  const renderedList = stations.slice(0, 10).map((station) => {
    return <StationItem key={station.id} station={station} selectStation={selectStation} />
  })

  return (
    <StyledStationList>{renderedList}</StyledStationList>
  )
}


export default StationList; 