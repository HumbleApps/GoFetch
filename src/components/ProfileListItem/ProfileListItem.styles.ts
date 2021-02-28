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
    icon: {
        // borderWidth: 1,
        padding: 2
    }
})