import colors from 'styles/colors';
import { StyleSheet } from 'react-native';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
    container: {
        // height: 100,
        width: 170,
        padding: 6,
        margin: 4,
        backgroundColor: colors.secondaryInactive,
        borderRadius: 10,
        marginRight: 10,
    },
    active: {
        backgroundColor: colors.secondaryMedium,
    },
    title: {
        textAlign: 'center',
        padding: 8
    },
    subtitle: {
        fontSize: fontSize.small,
    }
})