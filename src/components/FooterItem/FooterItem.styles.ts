import fontSize from 'styles/fontSize';
import { StyleSheet } from 'react-native';
import colors from 'styles/colors';


export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.bg,
        padding: 4,
        marginRight: 20,
        marginBottom: 6
    },
    footerLinks: {
        // borderWidth: 1,
        padding: 2,
        fontSize: fontSize.small
    }
})