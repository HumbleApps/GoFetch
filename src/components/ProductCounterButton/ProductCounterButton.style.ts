import fontSize from 'styles/fontSize';
import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import boxShadow from 'styles/boxShadow';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
    padding: 4,
    marginVertical: 4,
    ...boxShadow,
    width: 96,
  },
  number: {
    color: colors.text,
    fontWeight: 'bold',
    marginHorizontal: 8,
    fontSize: fontSize.medium
  },
});
