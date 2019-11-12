import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCpQeM06j-ay9zEo1giEfBxakFBLwDKEdQ';

class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [
        {
          latitude: -25.5345,
          longitude: -49.3613,
        },
        {
          latitude: -25.504693,
          longitude: -49.3495899,
        },
        {
          latitude: -25.6083322,
          longitude: -49.429842,
        },
      ],
      coordinates2: [
        {
          latitude: -25.504693,
          longitude: -49.3495899,
          title: 'Alexandre',
          description: 'Casa do Alexandre'
        },
        {
          latitude: -25.6083322,
          longitude: -49.429842,
          title: 'Cae',
          description: 'Casa do Cae'
        },
      ],
      marginBottom: 1,
      borderRadius: 0,
    };

    this.mapView = null;
  }

  _onMapReady = () => {
    this.setState({ marginBottom: 0, borderRadius: 10000 })
  }

  _onUserLocationChange = (coordinate) => {
    let { coordinates } = this.state
    coordinates[0] = { latitude: coordinate.latitude, longitude: coordinate.longitude }
    console.log(coordinates)
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
    const { marginBottom, borderRadius } = this.state
    
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
          this._onUserLocationChange(e.nativeEvent.coordinate)
        }}
        showsCompass={true}
        showsMyLocationButton={true}
      >

        {this.state.coordinates2.map((coordinate, index) =>
          <Marker key={`coordinate_${index}`}
            identifier={`${index}`}
            coordinate={coordinate} 
            title={coordinate.title} 
            description={coordinate.description}
            onPress={(e) => this.getDistance(e)}
          />
        )}

        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
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
              // console.log('GOT AN ERROR');
            }}
          />
        )}

      </MapView>
    );
  }
}

export default Example;