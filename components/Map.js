import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';
import {PermissionsAndroid} from 'react-native';

const Map = () => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const origin = useSelector(selectOrigin);
  console.log(origin, 'this is data');
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="origin"
            description={origin.description}
            identifier="origin"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;
