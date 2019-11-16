import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { Info } from './styles';


import { route } from '../../services/db'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -25.5345;
const LONGITUDE = -49.3613;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCpQeM06j-ay9zEo1giEfBxakFBLwDKEdQ';

class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      marginBottom: 1,
    };

    this.mapView = null;
  }

  componentDidMount() {
    this.setState({coordinates: route})
  }

  _onMapReady = () => {
    this.setState({ marginBottom: 0 })
  }

  _onUserLocationChange = (coordinate) => {
    let { coordinates } = this.state
    coordinates[0] = { latitude: coordinate.latitude, longitude: coordinate.longitude }
    this.setState(coordinates)
  }

  getDistance = async (e) =>
  {
    let id = e.nativeEvent['id']
    const BaseLocation = `${this.state.coordinates[0].latitude},${this.state.coordinates[0].longitude}`;
    const TargetLocation = `${e.nativeEvent.coordinate['latitude']},${e.nativeEvent.coordinate['longitude']}`

    let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    let params = `origins=${BaseLocation}&destinations=${TargetLocation}&key=${GOOGLE_MAPS_APIKEY}&mode=driving`;  
    let finalApiURL = `${ApiURL}${encodeURI(params)}`;
    
    try {
      let response = await fetch(finalApiURL);
      let responseJson = await response.json();  
      let selected = {...this.state.coordinates2[id], 'title': `Distance: ${responseJson['rows'][0]['elements'][0]['distance']['text']}`, 'description': `Duration: ${responseJson['rows'][0]['elements'][0]['duration']['text']}`}
      let newCoordinate2 = [...this.state.coordinates2]
      newCoordinate2[id] = selected
      this.setState({coordinates2: newCoordinate2})
    } catch(error) {
      console.error(error);
    } 
  }

  render() {
    const { marginBottom } = this.state
    
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{ ...StyleSheet.absoluteFillObject , marginBottom: marginBottom}}
        ref={c => this.mapView = c}
        onMapReady={this._onMapReady}        
        showsUserLocation={true}
        followsUserLocation={true}
        rotateEnabled={false}
        onUserLocationChange={e => {
          // this._onUserLocationChange(e.nativeEvent.coordinate)
        }}
        showsCompass={true}
        showsMyLocationButton={true}
      >

        {(this.state.coordinates.length >= 2) && (
          <>
            <MapViewDirections
              origin={this.state.coordinates[0]}
              // waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              // destination={this.state.coordinates[this.state.coordinates.length-1]}
              // apikey={GOOGLE_MAPS_APIKEY}
              precision="high"
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={false}
              onStart={(params) => {
                // console.log(params)
                // console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={result => {
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 7),
                    bottom: (height / 7),
                    left: (width / 7),
                    top: (height / 7),
                  }
                });
              }}
              onError={(errorMessage) => {
                console.log(errorMessage);
              }}
            />

            {this.state.coordinates.slice(1).map((coordinate, index) =>
              <Marker key={`coordinate_${index}`}
                identifier={`${index}`}
                coordinate={coordinate} 
                title={coordinate.title} 
                description={coordinate.description}
                onPress={(e) => this.getDistance(e)}
              />
            )}

            <Info>Proximo passageiro</Info>
          
        </>
        )}

      </MapView>
    );
  }
}

export default Example;