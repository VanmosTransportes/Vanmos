import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const COORD = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 1,
  longitudeDelta: 1 * ASPECT_RATIO,
}

class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLocation: {
        latitude: -25.5382924,
        longitude: -49.3623078,
      },
      autoLocation: {
        latitude: -25.5382924,
        longitude: -49.3628078,
      },
      marginBottom: 1,
      status: false
    };

    this.mapView = null;
  }

  _onMapReady = () => {
    this.setState({ marginBottom: 0 })
  }

  render() {
    const { marginBottom, userLocation, autoLocation, status } = this.state
    const { latitude, longitude } = userLocation

    return (
      <MapView
        initialRegion={COORD}
        style={{...StyleSheet.absoluteFill, marginBottom: marginBottom, borderRadius: 1000}}
        onMapReady={this._onMapReady}
        ref={map => this.mapView = map}
        showsUserLocation={true}
        rotateEnabled={false}
        followsUserLocation={true}
        onUserLocationChange={v => {
          let status = isPointWithinRadius(this.state.userLocation, this.state.autoLocation, 47)
          let { latitude, longitude } = v.nativeEvent.coordinate
          this.setState({ userLocation : { latitude, longitude }, status })
        }}
        showsCompass={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={autoLocation}
        />
        <Circle
          center={autoLocation}
          radius={47}
          fillColor={"rgba(255,0,0,0.3)"}
        />

        <Text>
          userLocation: {latitude} | {longitude}
          tamo lá? {status.toString()}
        </Text>
      </MapView>
    );
  }
}

export default Example;