import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const RepMapLoad = (props) => {

    const repLocation = props.location

    //GOOGLE REQUIRED INLINE STYLES
    const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
    };

    return (
            // LOADS MAP FROM GOOGLE
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

// Insert GoogleGeolocationAPI Key in the ENV file
// GOOGLE REQUIRE A WRAPPER
export default GoogleApiWrapper({apiKey: `${process.env.REACT_APP_GOOGLE_API}`})(RepMapLoad);