import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {width: '50%', height: '50%'}

export class MapContainer extends React.Component {
  render() {
    console.log('TANGO', this.props.selectedStation)
    return (
      <div>
        {
          !this.props.google
            ? null 
            : (
              <Map  
                style={style}
                center={{ lat: this.props.selectedStation.latitude, lng: this.props.selectedStation.longitude }}
                google={this.props.google} 
                zoom={14}
              >     
              <Marker onClick={this.onMarkerClick}
                      name={'station name'} />
      
              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.props.selectedStation.stationName}</h1>
                </div>
              </InfoWindow> 
              </Map>
          )
        }
      </div>
  
    )    
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgtvmOJ3U4aPjwAcwZqd8mBROj2AhRTus',
})(MapContainer)