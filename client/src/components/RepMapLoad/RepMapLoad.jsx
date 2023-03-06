import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const RepMapLoad = (props) => {

    const repLocation = props.location

    let  googleMapsKey = `${process.env.REACT_APP_GOOGLE_API}`;
    const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      };


    return (
            <Map
              google={props.google}
              zoom={12}
              style={mapStyles}
              center={repLocation}
            >
                <Marker position={repLocation}/>
            </Map>
    );
};

//Insert GoogleGeolocationAPI Key below.
export default GoogleApiWrapper({apiKey: 'AIzaSyC1Z6Vh3EIc-vm4BpVq-7RSee6F5W-nsmg'})(RepMapLoad);