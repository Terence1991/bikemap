import React from 'react'
import styled from 'styled-components';

const ListItem = styled.li`
  border-bottom: 1px solid #D0CFCE;
  padding: 0 8px;
  cursor: pointer;
`
const StationName = styled.h3`
 &:hover {
   text-decoration: underline;
   color: blue;
 }
`

const Availability = styled.p`
`

const formatAvailability = (availableBikes, totalDocks ) => {
  return   Math.round((availableBikes / totalDocks) * 100) 
}

const StationItem = ({ station, selectStation }) => {
  const {availableBikes, totalDocks} = station
  return (
    <ListItem 
      onClick={() => selectStation(station)}
    >
      <StationName>{station.stationName}</StationName>
      <Availability>Bikes Available: {formatAvailability(availableBikes, totalDocks)}%</Availability>
    </ListItem>
  )
}

export default StationItem;
