import { Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ostor from '../../assets/ostor.png';
import AddIcon from '../../assets/Add.png';

import Coordinates from '../../Components/Coordinates';
import { Text, General as View, TouchableOpacity } from '../../Components/Containers';

const Home = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const retrieveCoordinates = async () => {
      const storedCoordinates = await AsyncStorage.getItem('coordinates');

      if (storedCoordinates) {
        setCoordinates(JSON.parse(storedCoordinates));
      }
    };

    retrieveCoordinates();
  }, []);

  const saveCoordinates = async coords => {
    await AsyncStorage.setItem('coordinates', JSON.stringify(coords));
    setCoordinates(coords);
  };

  const onAddNewLocationPress = () => {
    Geolocation.getCurrentPosition(info => {
      const newCoordinate = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      };

      const coordinatesArray = [...coordinates, newCoordinate];

      saveCoordinates(coordinatesArray);
    });
  };

  const handleRemoveCoordinates = removedCoords => {
    setCoordinates(removedCoords);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text p={8} background="#F0F0F0">
        Coordinates
      </Text>
      {coordinates.length ? (
        <Coordinates coordinates={coordinates} onRemoveCoordinates={handleRemoveCoordinates} />
      ) : (
        <View
          justifyContent="center"
          alignItems="center"
          style={{
            flex: 1,
          }}
        >
          <Image source={Ostor} alt="Ostor" />
          <Text text={20} color="#000" weight="600">
            Welcome to GPS Store
          </Text>
          <Text color="#8B8B8B" mt={4}>
            Your GPS store is empty
          </Text>
        </View>
      )}

      <TouchableOpacity
        right={10}
        bottom={10}
        position="absolute"
        activeOpacity={0.6}
        onPress={onAddNewLocationPress}
      >
        <Image source={AddIcon} alt="AddIcon" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
