import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const data = [
    {
      id: '123',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '456',
      title: 'Order a food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatScreen',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                paddingLeft: 6,
                backgroundColor: 'grey',
                width: 200,
                margin: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={!origin}
              onPress={() => {
                navigation.navigate(item.screen);
              }}>
              <View style={{}}>
                <Image
                  style={{height: 120, width: 120, resizeMode: 'contain'}}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={{color: 'black', marginTop: 2, fontSize: 20}}>
                  {item.title}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text style={{color: 'white', fontSize: 30}}>{'->'}</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NavOptions;
