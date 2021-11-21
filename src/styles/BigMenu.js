import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4da4e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: SCREEN_HEIGHT*0.1,
    marginTop:-SCREEN_HEIGHT*0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH*0.5,
    height: SCREEN_WIDTH*0.3,
  },
  full: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20,
  },
  slogan: {
    textAlign: "center",
    color: "#fff",
    fontSize: SCREEN_WIDTH*0.04,
  },
  frame: {
    opacity: 0.9,
    width: '100%',
    height: 330,
    margin: '0 auto',
  },
  frameBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    backgroundColor: 'white',
    // display: 'block',
    display: 'flex',
    width: SCREEN_WIDTH * 0.32,
    height: SCREEN_WIDTH * 0.32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemML: {
    marginLeft: 20,
  },
  menuItemMR: {
    marginRight: 20,
  },
  menuItemText: {
    fontSize: SCREEN_WIDTH * 0.035,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
  },
  frameSetting: {
    alignSelf: 'flex-end',
    marginRight: SCREEN_WIDTH * 0.12,
  },
});