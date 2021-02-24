import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import { Dimensions, StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
        // borderWidth: 1,
        marginTop: 18,
        paddingVertical: 6
    },
    commonScrollViewContainer: {
        marginTop: 40,
        marginBottom: 60,
        backgroundColor: colors.backgroundGray
    },
    bold: {
        fontWeight: '700'
    },
    medium: {
        fontSize: fontSize.medium
    },
    spacing: {
        padding: 6
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
        width: Dimensions.get("window").width / 2 - 30,
        height: 46,
        backgroundColor: colors.white,
        borderRadius: 14,

    },
    buttonActive: {
        backgroundColor: colors.secondaryLight
    },
    center: {
        marginTop: 10,
        alignSelf: 'center',
        // borderWidth:1,
        alignItems: 'center'
    },
    textMain: {
        color: colors.secondaryGray,
        fontWeight: '700',
        // fontSize: fontSize.medium
        // padding: 6,
    },
    textSecondary: {
        color: colors.bgWithOpacity,
        fontSize: fontSize.normal -2,
        // padding: 6,
    },
    textLight: {
        color: colors.textSecondary,
        // padding: 6,
    },
    textLink:{
        color: colors.primary,
        fontWeight: '700',
        paddingTop: 8
    }
});

export default commonStyles;