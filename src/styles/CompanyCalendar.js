import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  frame: {
    opacity: 0.9,
    width: '100%',
    marginTop: '4%',
  },
  frameCalendar: {
    marginTop: 10
  },
  cancelLunchBtn: {
    bottom: 10,
    top: 10,
    margin: 10,
    right: 10,
    marginRight: 10
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#fff',
  },
  itemDaysOff: {
    backgroundColor: '#4da4e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  itemLunch: {
    backgroundColor: '#f9c74f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  itemVeggie: {
    backgroundColor: '#90be6d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
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
