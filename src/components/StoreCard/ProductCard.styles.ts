import { Dimensions, StyleSheet } from 'react-native';
import boxShadow from 'styles/boxShadow';
import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
    storeCard: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 26,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white,
        width: Dimensions.get("window").width - 40,
        alignSelf: 'center'
    },
    storeCardImageContainer: {
        width: 90,
        height: 90,
        padding: 10,
        borderRadius: 26,
    },
    storeCardImage: {
        padding: 10
    },
    storeCardTextContainer: {
        flex: 1,
        paddingTop: 6
    },
    storeCardText: {
        paddingRight: 10,
        paddingLeft: 0
    },
    tagAndText: {
        padding: 2
    },
    storeCardActive: {
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
    storeCardPriceContainer: {
        marginTop: 4,
        justifyContent: 'space-between',
        width: '90%'
    },
    priceBox: {
        marginLeft: -8,
        alignItems: 'center',
    },
    price: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.golden,
    }
})