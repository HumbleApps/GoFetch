import {
  BAKERY_ICON,
  DAIRY_PRODUCTS,
  JUG_ICON,
  SPEAKER_ICON,
} from "assets/icons";
import { SafeAreaView, StatusBar, View } from "react-native";

import Navbar from "components/Navbar";
import ProductCard from "components/StoreCard";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./StoreView.styles";
import BottomNavigation from "components/BottomNavigation";
import Strip from "components/Strip";
import Text from "components/Text";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";

const ShopScreen = () => {
  const [banner, setbanner] = useState(false);
  const [productsAdded, setProductsAdded] = useState(0);

  const handleProductsCart = (product) => {};
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
        <View
          style={[
            styles.container,
            banner ? { marginBottom: 50 } : { marginBottom: 10 },
          ]}
        >
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={new Date().getTime()}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
            id={new Date().getTime()}
          />
        </View>
      </ScrollView>
      <Strip>
        <View style={styles.stripContainer}>
          <Text style={styles.stripText}>{"1 Item   |    $ 403"}</Text>
          <View style={commonStyles.flexRow}>
            <Text style={styles.stripText}>VIEW CART </Text>
            <Icon icon={faShoppingBag} size={16} color={colors.white} />
          </View>
        </View>
      </Strip>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default ShopScreen;
