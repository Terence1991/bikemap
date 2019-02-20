import React from 'react'
//stationName
//availableBikes / totalDocks
//onhover in react  then add others things


const StationItem = ({ station, selectedStation }) => {
  return (
    <div style={{ padding: '2rem' }} onMouseOver={() => selectedStation(station)} >
      {station.stationName}
      <div>
        Bikes Available:  {station.availableBikes / station.totalDocks} %
      </div>
    </div>
  )
}

export default StationItem;