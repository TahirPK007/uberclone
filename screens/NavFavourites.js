import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'code street, london, uk',
  },
  {
    id: '566',
    icon: 'briefcase',
    location: 'work',
    destination: 'london eye, london, uk',
  },
];

const NavFavourites = () => {
  return (
    <View>
      <View>
        <FlatList
          data={data}
          // ItemSeparatorComponent={() => {
          //   <View style={{flexDirection: 'row', height: 1, borderWidth: 1}} />;
          // }}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={{margin: 5, marginLeft: 20}}>
                <Text>{item.location}</Text>
                <Text>{item.destination}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default NavFavourites;
