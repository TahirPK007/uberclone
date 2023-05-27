import {View, Text} from 'react-native';
import React from 'react';
import Map from '../components/Map';

import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from './NavigateCard';
import RideOptions from './RideOptions';

const Stack = createStackNavigator();

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>MapScreen</Text>
      <View style={{height: '50%', width: '100%'}}>
        <Map />
      </View>
      <View style={{width: '100%', height: '50%'}}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
