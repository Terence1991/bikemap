import React from 'react'
import styled from 'styled-components';

const StyledStationDeatil = styled.div`
padding: 2rem;
width: 100%;
font-size: 2rem;
`

const StationDetail = ({station}) => {
  return (
    <StyledStationDeatil>
    <div> 
      <h1>
        Bike Station Details

      </h1>
     Docks Available: {station.availableDocks}
      <div>
       Total Docks:{station.totalDocks}
      </div>
      <div>
        Latitude: {station.latitude}
      </div>
      <div>
        Longtitude: {station.longitude}
      </div>
      <div>
        Last Comunication Time: {station.lastCommunicationTime}
      </div>
    </div>
  </StyledStationDeatil>
  )
}

export default StationDetail