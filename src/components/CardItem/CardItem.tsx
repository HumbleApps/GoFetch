import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./CardItem.styles";

const CartItem = () => {
  let Image_Http_URL ={ uri: 'https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534494_1280.jpg'};

  return ( 
    <View style={styles.container}>
      {/* <Text>Shop</Text> */}
      <ImageBackground source={Image_Http_URL} style = {styles.image}>
      <Text style={styles.text}>Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default CartItem;
