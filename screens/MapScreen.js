import {View, Text} from 'react-native';
import React from 'react';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>MapScreen</Text>
      <View style={{height: '50%', width: '100%'}}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
