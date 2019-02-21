import React from 'react'
import styled from 'styled-components';

const StyledStationDeatil = styled.div`
padding: 2rem;
border: 2px solid black;
width: 100%;
font-size: 2rem;
`

const StationDetail = ({station}) => {
  return (
    <StyledStationDeatil>
    <div> 
      <h1>Bike Station Details</h1>
     Docks Available: {station.availableDocks}
      <div>
       Total Docks:{station.totalDocks}
      </div>
      <div>
        Latitude: {station.latitude}
      </div>
      <div>
        Longtitude: {station.longtitude}
      </div>
    </div>
  </StyledStationDeatil>
  )
}

export default StationDetail