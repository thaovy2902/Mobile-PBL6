import * as React from 'react';

import { Dimensions, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box } from 'native-base';
import HeaderBar from '../../../components/Header';
import { LeaveTypes } from './LeaveTypes';
import { LeaveTypesGroup } from './LeaveTypesGroup';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: LeaveTypes,
  second: LeaveTypesGroup,
});

export const Leave = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Leave Types' },
    { key: 'second', title: 'Group Leave Types' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? '#4da4e0' : 'coolGray.200';
          const fontSize = 10;

          return (
            <Box
              key={i}
              borderBottomWidth='3'
              borderColor={borderColor}
              flex={1}
              alignItems='center'
              p='3'
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ color, fontSize }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <HeaderBar title='Leave Types' navigation={navigation}></HeaderBar>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </NativeBaseProvider>
  );
};
