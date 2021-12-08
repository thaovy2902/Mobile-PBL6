import * as React from 'react';

import { Dimensions, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box } from 'native-base';
import HeaderBar from '../../components/Header';
import { GeneralProfile } from './GeneralProfile';
import { RemainLeave } from './RemainLeave';
import { PersonalEducation } from './PersonalEducation';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: GeneralProfile,
  second: RemainLeave,
  third: PersonalEducation,
});

export const PersonalInformation = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'General Profile' },
    { key: 'second', title: 'Remain Leave' },
    { key: 'third', title: 'Education' },
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
          const fontSize = 13;

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
      <HeaderBar title='Personal Information' navigation={navigation} />
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
