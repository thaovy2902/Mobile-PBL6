import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  frameHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff"
  },  
  detailBtn: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.1,
    backgroundColor: '#4da4e0',
    borderRadius: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10
  },
  detailText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  }
});
