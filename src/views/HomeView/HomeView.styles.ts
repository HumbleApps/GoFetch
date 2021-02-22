import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 8,
    borderWidth: 4,
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
