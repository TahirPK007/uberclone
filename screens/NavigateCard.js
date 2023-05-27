import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {setDestination} from '../slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Welcom to your ride</Text>

      <View style={{width: '100%', height: '30%'}}>
        <GooglePlacesAutocomplete
          placeholder="Where to"
          nearbyPlacesAPI="GooglePlacesAutocomplete.RESULTS"
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              }),
            );

            navigation.navigate('RideOptions');
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyBGQWvAdOVL5AgPNEngX25hPtT5xgxF_n8',
            language: 'en',
          }}
        />
      </View>
      <NavFavourites />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 40,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('RideOptions');
          }}>
          <Text>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 40,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Text>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
