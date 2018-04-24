import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const style = {
    width: '50%',
    height: '40%'

}

export class MapContainer extends React.Component {
    render() {
        if(this.props.coordinates){
            let lat = this.props.coordinates.lat
            let lng = this.props.coordinates.lng
            return (
                <div style={{width:'100%',height: 300}}>
                    <Map google={this.props.google}

                    style={style}
                    initialCenter={{

                        lat: lat,
                        lng: lng

                    }}

                zoom={10}>

                    </Map>
                </div>)
        } else {
            return <p>Cargando</p>
        }



    }

}
export default GoogleApiWrapper({

    apiKey: 'AIzaSyAp0QWytHdPRYs_EJh1N-mWXHBL6HOhkvY'
})(MapContainer)
