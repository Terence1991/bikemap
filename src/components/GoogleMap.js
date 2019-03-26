import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {width: '50%', height: '100%'}

export class MapContainer extends React.Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )    
  }

}

export default GoogleApiWrapper({
  apiKey: '1025169971631-oj5bh400fi1pugoj0anpdfmi2b4amqk5.apps.googleusercontent.com',
})(MapContainer)