import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const style = {
   width: '70%',
   height: '50%'

 }

 export class MapContainer extends React.Component {
   render() {
       return (

           <Map google={this.props.google}

               style={style}
               initialCenter={{

                   lat: 40.854885,
                   lng: -88.081807

               }}

            zoom={10}>


           </Map>
       );
   }

}
export default GoogleApiWrapper({
  
   apiKey: 'AIzaSyAp0QWytHdPRYs_EJh1N-mWXHBL6HOhkvY'
})(MapContainer)
