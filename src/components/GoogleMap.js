import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {width: '50%', height: '50%'}

export class MapContainer extends React.Component {
  
  render() {
  console.log("PROPS ====== ", this.props)
  console.log("PROPS LAT=== ", this.props.selectedStation.latitude)
  console.log("PROPS LNG=== ", this.props.selectedStation.longitude)
    return (
      <div>
        {
          !this.props.google
            ? null 
            : (
              <Map  
                style={style}
                initialCenter={{ lat: this.props.selectedStation.latitude, lng: this.props.selectedStation.longitude}}
                // center={{ lat: this.props.latitude, lng: this.props.longitude}}
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
  apiKey: 'AIzaSyCaAIKyfp5gp7gKq2tyaxelkfVILgpTCmQ',
})(MapContainer)