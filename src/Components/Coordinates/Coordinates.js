import Config from 'react-native-config';
import { useEffect, useState } from 'react';
import Geocoder from 'react-native-geocoding';
import { Button, FlatList, Image, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Cloud from '../../assets/oneDrive.png';
import deleteIcon from '../../assets/Vector.png';

import { Text, General as View, Flex, TouchableOpacity } from '../Containers';

const Coordinates = ({ coordinates: _coordinates, onRemoveCoordinates }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [coordinates, setCoordinates] = useState(_coordinates);
  const [address, setAddress] = useState();

  useEffect(() => {
    setCoordinates(_coordinates);
  }, [_coordinates]);

  const onDeleteIconPress = async i => {
    /**
     *  Storing the list items as an array in a single key value pair
     *  so while deleting finding the deleted item by its index filtering the list
     *  deleting the whole list (key, value pair) and then setting the filtered list to the same key
     *  this becomes big operation if the list is very large,
     *  but since the list is small in this case
     *  following this approach
     */
    await AsyncStorage.removeItem('coordinates');
    const coords = coordinates.filter((_, index) => i !== index);

    if (coords.length) {
      await AsyncStorage.setItem('coordinates', JSON.stringify(coords));
    }

    onRemoveCoordinates(coords);
    setCoordinates(coords);
  };

  const onItemPress = async item => {
    /**
     *  added API_KEY in env file to retreive address from coordinates
     *  pushing env file for this to work on your computer
     */
    Geocoder.init(Config.GOOGLE_API_KEY);

    Geocoder.from(item.latitude, item.longitude)
      .then(res => {
        var addressComponent = res.results[0].formatted_address;
        setAddress(addressComponent);
        setModalVisible(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const renderListItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => onItemPress(item)}>
        <Flex m={18} justifyContent="space-between">
          <Flex>
            <Image source={Cloud} alt="Cloud" />
            <Text text={15} color="#000" ml={10}>
              {item.latitude}
            </Text>
            <Text text={15} color="#000">
              {`, ${item.longitude}`}
            </Text>
          </Flex>
          <TouchableOpacity activeOpacity={0.6} onPress={() => onDeleteIconPress(index)}>
            <Image source={deleteIcon} alt="deleteIcon" />
          </TouchableOpacity>
        </Flex>
        <View borderBottomColor="#E1E1E1" borderBottomWidth={1} />
        {modalVisible && (
          <Modal
            transparent={true}
            visible={modalVisible}
            animationType=""
            onRequestClose={() => setModalVisible(false)}
          >
            <View w="80%" background="#FFF" borderRadius={10} p={20} m="auto" alignSelf="center">
              <Text text={20} weight="bold">
                Full Address
              </Text>
              <Text my={20}>{address}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={coordinates}
        renderItem={renderListItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Coordinates;
