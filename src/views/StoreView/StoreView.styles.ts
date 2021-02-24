import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
    container: {
        marginTop: 10,
    },
    buttonContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    stripContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        alignContent: 'center',
        padding: 6
    },
    stripText: {
        color: colors.white,
    }
})