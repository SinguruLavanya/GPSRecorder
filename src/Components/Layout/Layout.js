import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight }}>
      <Header />
      {children}
    </View>
  );
};

export default Layout;
