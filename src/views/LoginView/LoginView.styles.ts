import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import { Dimensions, StyleSheet } from 'react-native';
import boxShadow from 'styles/boxShadow';

export default StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 20,
    paddingHorizontal: 18,
    // borderWidth: 4,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: Dimensions.get("window").height / 2,
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  /**
   * Add this class to view container if using bottom navigation
   */
  containerBottomOffset: {
    paddingBottom: 80,
  },
});
