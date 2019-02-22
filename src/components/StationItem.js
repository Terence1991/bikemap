import React from 'react'
import styled from 'styled-components';

const ListItem = styled.li`
  border-bottom: 1px solid #D0CFCE;
  padding: 0 8px;
`
const StationName = styled.h3`
`

const Availability = styled.p`


`

const formatAvailability = (availableBikes, totalDocks ) => {
  return   Math.round((availableBikes / totalDocks) * 100) 
}

const StationItem = ({ station, selectStation, nextPage, pageSkip }) => {
  const {availableBikes, totalDocks} = station
  return (
    <ListItem 
      onMouseOver={() => selectStation(station)}
      onClick={() => nextPage(pageSkip)} 
    >
      <StationName>{station.stationName}</StationName>
      <Availability>Bikes Available: {formatAvailability(availableBikes, totalDocks)}%</Availability>
    </ListItem>
  )
}

export default StationItem;
