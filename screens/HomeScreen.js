import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from './NavFavourites';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 5}}>
        <Image
          style={{height: 100, width: 100, resizeMode: 'contain'}}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
      <View style={{width: '100%', height: '30%'}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          nearbyPlacesAPI="GooglePlacesAutocomplete.RESULTS"
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyBGQWvAdOVL5AgPNEngX25hPtT5xgxF_n8',
            language: 'en',
          }}
        />
      </View>

      <NavOptions />
      <NavFavourites />
    </View>
  );
};

export default HomeScreen;
