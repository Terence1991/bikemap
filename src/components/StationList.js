import React from 'react'
import StationItem from './StationItem'


const StationList = ({stations, selectedStation }) => {
  const renderedList = stations.map((station) => {
    return <StationItem key={station.id} station={station} selectedStation={selectedStation} />
  })

  return (
    <div>{renderedList}</div>
  )
}


export default StationList; 