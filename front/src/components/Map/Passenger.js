import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

import { DurationText, DistanceText, Infos } from './styles';


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
      userLocation: [],
      autoLocation: {
        latitude: -25.361351,
        longitude: -49.1473446,
      },
      distance: "",
      duration: "",
      marginBottom: 1,
      load: 0,
    };
    this.mapView = null;
  }

  _onMapReady = () => {
    this.setState({ marginBottom: 0, load: 1 })
  }

  _onUserLocationChange = (coordinate) => {
    let { userLocation } = this.state
    userLocation = { latitude: coordinate.latitude, longitude: coordinate.longitude }
    this.setState({ userLocation })
  }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{...StyleSheet.absoluteFill, marginBottom: this.state.marginBottom}}
        onMapReady={this._onMapReady}
        ref={map => this.mapView = map}
        showsUserLocation={true}
        rotateEnabled={false}
        followsUserLocation={true}
        rotateEnabled={false}
        onUserLocationChange={e => {
          this._onUserLocationChange(e.nativeEvent.coordinate)

          // let status = isPointWithinRadius(this.state.userLocation, this.state.autoLocation, 47)
          // let { latitude, longitude } = v.nativeEvent.coordinate
          // this.setState({ userLocation : { latitude, longitude }, status })
        }}
        showsCompass={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={this.state.autoLocation}
        />
        
        {(this.state.userLocation.latitude) && (
          <MapViewDirections
            origin={this.state.autoLocation}
            destination={this.state.userLocation}
            apikey={GOOGLE_MAPS_APIKEY}
            precision="high"
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={false}
            onStart={(params) => {
              // console.log(params)
              // console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              this.setState({ duration: result.duration, distance: result.distance})
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
        )}

        <Infos>
          <DistanceText>Distancia: 2,5 KM</DistanceText>
          <DurationText>Tempo para chegada: 5 min</DurationText>
        </Infos>
      </MapView>
    );
  }
}

export default Example;