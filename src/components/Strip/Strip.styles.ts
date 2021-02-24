import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        width: Dimensions.get("screen").width,
        height: 36,
        marginBottom: 60,
        position: 'absolute',
        bottom: 0
    }
})