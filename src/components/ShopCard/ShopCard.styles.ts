import { StyleSheet } from 'react-native';
import boxShadow from 'styles/boxShadow';
import colors from 'styles/colors';

export default StyleSheet.create({
    shopCard: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 26,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white
    },
    shopCardImageContainer: {
        borderWidth: 2,
        width: 90,
        height: 90,
        padding: 10,
        margin: 16,
        borderRadius: 26,
    },
    shopCardImage: {
        padding: 20
    },
    shopCardTextContainer: {
        flex: 1
    },
    shopCardText: {
        paddingRight: 10,
        paddingLeft: 4
    },
    tagAndText: {
        padding: 2
    },
    shopCardActive: {
        borderWidth: 1,
        borderColor: colors.golden,
        backgroundColor: colors.secondaryActive,
        borderRadius: 26,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 10,
        ...boxShadow
    },
})