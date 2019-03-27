import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {width: '50%', height: '50%'}

export class MapContainer extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        {
          !this.props.google
            ? null 
            : (
              <Map  
                style={style}
                initialCenter={{ lat: this.props.latitude, lng: this.props.longitude}}
                google={this.props.google} 
                zoom={14}
              >
{/*         
                <Marker onClick={this.onMarkerClick}
                        name={'statoion name'} />88.081807
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.props.stationName}</h1>
                  </div>
                </InfoWindow> */}
              </Map>
          )
        }
      </div>
  
    )    
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANfpQCMpGyStCHLF7cnOC50ZlzTe6TqUg',
})(MapContainer)