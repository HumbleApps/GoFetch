import { StyleSheet, Dimensions } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    height: 40,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    // justifyContent: '',
    backgroundColor: colors.primary,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    // borderWidth:1,
    paddingBottom: 10
    // marginBottom: 20
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
    // borderWidth:1
  },
  langBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  header: {
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: fontSize.medium,
    alignSelf: 'center'
  },
  langText: {
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
  icon: {
    marginHorizontal: 8,
  },
  title:{
    // borderWidth:1,
    // display: 'flex',
    width: '80%'
    // marginLeft: Dimensions.get("window").width/5,
  }
});

export default styles;
