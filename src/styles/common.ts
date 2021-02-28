import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import { Dimensions, StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
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
        alignItems: 'center'
    },
    textMain: {
        color: colors.text,
        fontWeight: '700',
    },
    textSecondary: {
        color: colors.bgWithOpacity,
        fontSize: fontSize.normal -2,
    },
    textLight: {
        color: colors.textSecondary,
    },
    textLink:{
        color: colors.primary,
        fontWeight: '700',
        paddingTop: 8
    },
    border:{
        borderWidth: 1,
        width: "96%", 
        borderColor: colors.gray 
    }
});

export default commonStyles;