import { Dimensions, StyleSheet } from 'react-native';
import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({

    tabContainer: {
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tab: {
        width: '45%',
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
        borderBottomColor: colors.secondary,
        borderBottomWidth: 4
    },

})

export default styles;