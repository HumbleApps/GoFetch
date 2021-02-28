import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
    totalBreakup: {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 3,
        paddingBottom: 3
    },
    breakupItem: {
    },
    final: {
        fontWeight: '700',
        fontSize: fontSize.large,
        paddingTop: 8,
        borderTopColor: colors.backgroundGray,
    },
    finalItemView:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.bg,
        borderTopColor: colors.bg
    },
    default:{
    }
})