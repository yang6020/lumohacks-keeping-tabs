import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingIndicator = () => (
  <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color={"#05AEF6"} />
  </View>
);

export default LoadingIndicator;
