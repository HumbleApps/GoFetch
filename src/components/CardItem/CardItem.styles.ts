import { StyleSheet, Dimensions } from 'react-native';
import boxShadow from 'styles/boxShadow';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 2.5,
    borderWidth: 1,
    borderColor: '#dedede',
    padding: 0,
    // paddingHorizontal: 10,
    flexDirection: 'column',
    // flex:1,
    // justifyContent: 'space-between',
    // backgroundColor: colors.primary,
    // alignItems: 'center',
    margin: 8,
    borderRadius: 4,
    ...boxShadow
    // position: 'absolute',
    // top: 0,
    // width: Dimensions.get('window').width,
  },
  image: {
    height: Dimensions.get('window').width / 3.1,
    resizeMode: 'stretch',
    flex: 1,
    justifyContent: "center"
  },
  text: {
    backgroundColor: "#000000a0",
    color: colors.white,
    width: '100%',
    padding: 8,
    // height: '100%',
    display: 'flex',
    // flex: 1,
    fontSize: fontSize.normal,
    // alignSelf: 'center',
    textAlign: "center",
    // justifyContent: 'center',
  }
});

export default styles;