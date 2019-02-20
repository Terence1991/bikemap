import React from 'react'
import StationItem from './StationItem'


const StationList = ({stations}) => {
 const renderedList = stations.map((station) => {
    return <StationItem />
  })
  return (
    <div>{renderedList}</div>
  )
}


export default StationList; 