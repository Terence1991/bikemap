import React from 'react'
//stationName
//availableBikes / totalDocks
//onhover in react  then add others things


const StationItem = ({ station, selectStation, nextPage, pageSkip }) => {
  return (
    <div style={{ padding: '2rem' }} onMouseOver={() => selectStation(station)} onClick={() => nextPage(pageSkip)} >
      {station.stationName}
      <div>
        Bikes Available:  {station.availableBikes / station.totalDocks} %
      </div>
    </div>
  )
}

export default StationItem;