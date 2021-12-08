import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  frame: {
    opacity: 0.9,
    width: '100%',
    marginTop: '4%',
  },
  frameCalendar: {
    marginTop: 10,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
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
