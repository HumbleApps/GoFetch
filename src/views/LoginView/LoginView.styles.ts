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
  tabContainer: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    // borderWidth: 1,
    // height: 50,
    // borderLeftRadius: 30,
    // borderTopLeftRadius: 30,
    // borderRadius: 30,
    // ...boxShadow,
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 0.7,
    // elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'center',
    justifyContent: 'center'
  },
  tab: {
    width: '45%',
    // borderWidth: 1,

    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center'
  },
  tabLeft: {
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  tabRight: {
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
  },
  tabText: {
    alignSelf: 'center',
    fontSize: fontSize.normal,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 36
  },
  tabActive: {
    // borderBottomColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 4
  },
  image: {
    width: '100%',
    height: Dimensions.get("window").height /2,
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // ...boxShadow
    // borderWidth: 10
    // marginVertical: 50,
    // marginHorizontal: 10,
  },
  /**
   * Add this class to view container if using bottom navigation
   */
  containerBottomOffset: {
    paddingBottom: 80,
  },
});
