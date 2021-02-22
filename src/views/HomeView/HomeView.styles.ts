import { StyleSheet } from 'react-native';

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
  /**
   * Add this class to view container if using bottom navigation
   */
  containerBottomOffset: {
    paddingBottom: 80,
  },
});
