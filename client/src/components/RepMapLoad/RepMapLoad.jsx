

import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const RepMapLoad = (props) => {

    const { repData } = props;
    console.log(repData)

    const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'relative'
      };

    return (
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
                <Marker position={{ lat: 48.00, lng: -122.00}}/>
            </Map>
    );
};

export default GoogleApiWrapper({apiKey: 'AIzaSyC1Z6Vh3EIc-vm4BpVq-7RSee6F5W-nsmg'})(RepMapLoad);