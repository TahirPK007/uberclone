import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectTraveTimeInformation} from '../slices/navSlice';

const data = [
  {
    id: '1',
    title: 'uberx',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: '2',
    title: 'uber xl 456',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
];

const surge_charge_rate = 1.5;
const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState(null);
  const travetimeinformation = useSelector(selectTraveTimeInformation);
  return (
    <View style={{flex: 1}}>
      <Text>Select a ride - {travetimeinformation?.distance.text}</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 100,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setselected(item);
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                  // backgroundColor: item.id === selected.id ? 'gray' : 'white',
                }}>
                <Image
                  style={{height: 100, width: 100}}
                  source={{uri: item.image}}
                />
                <View>
                  <Text>{item.title}</Text>
                  <Text>{travetimeinformation?.duration.text} travel time</Text>
                </View>
                <Text style={{color: 'black', fontSize: 40}}>
                  {new Intl.NumberFormat('en-gb', {
                    style: 'currency',
                    currency: 'PKR',
                  }).format(
                    (travetimeinformation?.duration.value * surge_charge_rate) /
                      100,
                  )}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={{
            width: 200,
            height: 40,
            alignItems: 'center',
            borderWidth: 1,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'black'}}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptions;
