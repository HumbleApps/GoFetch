import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.bg,
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        shadowOpacity: 0.3,
        elevation: 1,
        marginTop: 6
    },
    title: {
        color: colors.secondaryGray
    },
    text: {
        color: colors.textSecondary
    },
    image:{
        height: 40,
    },
    titleTextContainer:{
        marginLeft: 20
    },
    
})