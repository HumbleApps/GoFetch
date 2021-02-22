import CartItem from "components/CardItem/CardItem";
import Navbar from "components/Navbar";
import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./HomeView.styles";

const HomeView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar header={"Home"} />
      <ScrollView>
        <View style={styles.container}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
