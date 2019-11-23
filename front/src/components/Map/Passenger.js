import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';

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
      autoLocation: { latitude: -25.361351, longitude: -49.1473446 },
      durDis: { duration: "0 min", distance: "0 km" },
      marginBottom: 1,
      load: 0,
    };
    this.mapView = null;
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        let userLocation = { latitude: position.coords.latitude, longitude: position.coords.longitude }
        this.getRouteDistanceDuration(userLocation, this.state.autoLocation, (durDis) => { this.setState({ userLocation, durDis }) }) 
      },
    );
  }

  getRouteDistanceDuration = async (start, end, cb) => {
    let baseLocation =  `${start.latitude},${start.longitude}`
    let targetLocation = `${end.latitude},${end.longitude}`

    console.log(baseLocation)
    console.log(targetLocation)

    let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    let params = `origins=${baseLocation}&destinations=${targetLocation}&key=${GOOGLE_MAPS_APIKEY}&mode=driving`;  
    let finalApiURL = `${ApiURL}${encodeURI(params)}`;
    try {
      let response = await fetch(finalApiURL);
      let responseJson = await response.json();
      console.log(responseJson)
      cb({ duration: responseJson.rows[0].elements[0].duration.text, distance: responseJson.rows[0].elements[0].distance.text })
    } catch(error) {
      console.error('getRouteDistanceDuration -->>', error);
    }
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
      <>
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
            // this._onUserLocationChange(e.nativeEvent.coordinate)
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
          )}
        </MapView>
        <Infos>
          {console.log(this.state.durDis.distance)}
          <DistanceText>Distancia: {this.state.durDis.distance}</DistanceText>
          <DurationText>Chegada em: {this.state.durDis.duration}</DurationText>
        </Infos>
      </>
    );
  }
}

export default Example;