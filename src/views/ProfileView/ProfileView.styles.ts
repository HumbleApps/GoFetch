import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
    container: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imgContainer: {
        borderWidth: 1,
        padding: 6,
        borderRadius: 30,
        marginRight: 16,
        borderColor: colors.secondaryGray
    },
    headerSection: {
        marginTop: 6,
        marginBottom: 10,
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border
    },
    footerContainer: {
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    footerLinks: {
        padding: 2,
        borderWidth:1
    },
    banner: {
        marginTop :6,
        marginBottom: 6
    },
    logoutButton: {
        bottom: 2,
        borderWidth:1,
        borderColor: colors.golden,
        width : '90%',
        alignSelf: 'center'
    }
})