import React from 'react'
import styled from 'styled-components';

const StyledStationDeatil = styled.div`
padding: 2rem;
width: 100%;
font-size: 2rem;
outline-style: solid;
outline-color: #C1B7B7;
outline-width: thin;
`

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 6rem;
  color: white;
  background: #730EF7;
  line-height: 6rem;
  transform: translateY(0);
  transform: translate3d(0,0,0);
  transition: .25s transform;
  border-radius: 5px;
 
 `

const StationDetail = ({station}) => {
  return (
    <StyledStationDeatil>
    <div> 
      <StyledHeader>
      Bike Station Details
      </StyledHeader>
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