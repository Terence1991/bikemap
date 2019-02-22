import React from 'react'
import styled from 'styled-components';
const StationName = styled.h1`
 
`
const MapLink = styled.a`
	text-decoration: none;
`

const StationInformation = styled.p`
`

const StationDetail = ({ station }) => {
  const { 
    stationName,
    availableDocks, 
    totalDocks, 
    latitude, 
    longitude, 
    lastCommunicationTime
  } = station;
  return (
    <div>
      <StationName>Bike Station Details</StationName>
      <h2>{stationName}</h2>
      <StationInformation>Docks Available: {availableDocks}</StationInformation>
      <StationInformation>Total Docks: {totalDocks}</StationInformation>
	  <MapLink 
	  	target="_blank"
		  href={`https://maps.google.com/?q=${latitude},${longitude}`}
	  > 
	  	🗺 View station location via google maps 
	  </MapLink>
      <StationInformation>Latitude: {latitude.toFixed(2)}</StationInformation>
      <StationInformation>Longtitude: {longitude.toFixed(2)}</StationInformation>
      <StationInformation>Last Comunication Time: {lastCommunicationTime.toString()}</StationInformation> 
  </div>
  )
}
export default StationDetail