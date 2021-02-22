import fontSize from 'styles/fontSize';
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
        // borderWidth: 1,
        marginTop: 18,
        paddingVertical: 6
    },
    bold: {
        fontWeight: '700'
    },
    medium: {
        fontSize: fontSize.medium
    },
});

export default commonStyles;