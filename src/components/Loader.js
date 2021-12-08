import React from 'react';

import { Image, View } from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: 50,
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <Image source={require('../assets/Spinner.gif')} />
    </View>
  );
};

export default Loader;
