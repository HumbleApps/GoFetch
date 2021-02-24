import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  BAKERY_ICON,
  DAIRY_PRODUCTS,
  JUG_ICON,
  SPEAKER_ICON,
} from "assets/icons";
import BottomNavigation from "components/BottomNavigation";
import Icon from "components/Icon";
import Navbar from "components/Navbar";
import ProductCard from "components/StoreCard";
import Strip from "components/Strip";
import Text from "components/Text";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-native";
import pathNames from "routes/pathNames";
import {
  selectItemsInCartCount,
  selectTotalAmount,
} from "selectors/cartSelectors";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./StoreView.styles";

const ShopScreen = () => {
  const history = useHistory();
  let showBanner = false;

  const itemsInCartCount = useSelector(selectItemsInCartCount);
  const totalPrice = useSelector(selectTotalAmount);

  itemsInCartCount > 0 ? (showBanner = true) : (showBanner = false);

  const handleViewCart = () => {
    history.push(pathNames.cart);
  };
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
            showBanner ? { marginBottom: 50 } : { marginBottom: 10 },
          ]}
        >
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={1231}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
            id={1232}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
            id={1233}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={1234}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
            id={1235}
          />
          <ProductCard
            name={"Speackers"}
            image={SPEAKER_ICON}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={1236}
          />
          <ProductCard
            name={"Bakery Products Combo"}
            image={BAKERY_ICON}
            description={"Milk, Cheese, Butter & cured combo 1 kg each"}
            price={38.17}
            stock={10}
            id={1237}
          />
          <ProductCard
            name={"Glass Jug"}
            image={JUG_ICON}
            description={"Jug of glass, recycleable and env friendly"}
            price={2.19}
            stock={11}
            id={1238}
          />
          <ProductCard
            name={"Daily Product"}
            image={DAIRY_PRODUCTS}
            description={"Sony Extra Room Sound 4.1mm X Plus"}
            price={8.07}
            stock={20}
            id={1239}
          />
          <ProductCard
            name={"Daily Product Pack"}
            image={DAIRY_PRODUCTS}
            description={"Milk, orange juice, cheese and curd 100g"}
            price={9.87}
            stock={5}
            id={1230}
          />
        </View>
      </ScrollView>
      {showBanner && (
        <Strip>
          <View style={styles.stripContainer}>
            <Text style={styles.stripText}>{`${itemsInCartCount} ${
              itemsInCartCount === 1 ? "Item" : "Items"
            }   |    $ ${totalPrice}`}</Text>
            <View style={commonStyles.flexRow}>
              <Text style={styles.stripText} onPress={handleViewCart}>
                VIEW CART{" "}
              </Text>
              <Icon icon={faShoppingBag} size={16} color={colors.white} />
            </View>
          </View>
        </Strip>
      )}
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default ShopScreen;
