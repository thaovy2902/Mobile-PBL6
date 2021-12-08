import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  detailBtn: {
    width: 100,
    height: 40,
    backgroundColor: '#4da4e0',
    borderRadius: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: '2%',
  },
  detailText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
