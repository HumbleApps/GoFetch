import {
  BAKERY_ICON,
  DAIRY_PRODUCTS,
  JUG_ICON,
  SPEAKER_ICON
} from "assets/icons";
import { SafeAreaView, StatusBar, View } from "react-native";

import Navbar from "components/Navbar";
import ProductCard from "components/StoreCard";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./StoreView.styles";

const ShopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={colors.secondary}
        barStyle={"light-content"}
        showHideTransition={"fade"}
        hidden={false}
      />
      <Navbar
        header={"Store Products"}
        backgroundColor={colors.secondary}
        color={colors.text}
      />
      <ScrollView style={commonStyles.commonScrollViewContainer}>
        <View style={styles.container}>
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
          />
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
