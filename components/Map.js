import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectDestination,
  selectOrigin,
  settraveTimeInformation,
} from '../slices/navSlice';
import {PermissionsAndroid} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapref.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, bottom: 50, right: 50, left: 50},
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const gettravetime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${
          origin.description
        }&destinations=${
          destination.description
        }&key=${'AIzaSyBGQWvAdOVL5AgPNEngX25hPtT5xgxF_n8'}`,
      )
        .then(res => res.json())
        .then(data => {
          dispatch(settraveTimeInformation(data.rows[0].elements[0]));
        });
    };
    gettravetime();
  }, [origin, destination, 'AIzaSyBGQWvAdOVL5AgPNEngX25hPtT5xgxF_n8']);

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapref}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={'AIzaSyBGQWvAdOVL5AgPNEngX25hPtT5xgxF_n8'}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
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
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;
