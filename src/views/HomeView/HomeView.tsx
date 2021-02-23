import CartItem from "components/CardItem/CardItem";
import Navbar from "components/Navbar";
import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectUserEmail } from "selectors/authSelectors";

import styles from "./HomeView.styles";

const HomeView = () => {
  const email = useSelector(selectUserEmail);
  console.log("🚀 ~ file: HomeView.tsx ~ line 13 ~ HomeView ~ email", email);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Navbar header={"Home"} />

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
