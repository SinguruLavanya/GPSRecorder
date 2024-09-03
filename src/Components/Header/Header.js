import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#33B5EF',
    width: '100%',
  },
});

const Header = () => {
  return <View style={styles.header} />;
};

export default Header;
