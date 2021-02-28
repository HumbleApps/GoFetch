import BottomNavigation from "components/BottomNavigation";
import BreakupItem from "components/BreakupItem";
import Button from "components/Button";
import Divider from "components/Divider";
import Navbar from "components/Navbar";
import ProductCard from "components/StoreCard";
import { Status } from "constants/status";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-native";
import pathNames from "routes/pathNames";
import { selectItemsInCart, selectTotalAmount } from "selectors/cartSelectors";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./CartView.styles";

const CartView = () => {
  const products = useSelector(selectItemsInCart);
  const total = useSelector(selectTotalAmount);

  const history = useHistory();

  const handleCheckout = () => {
    history.push(pathNames.checkout);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={colors.navbarBackgroundColor}
        barStyle={"light-content"}
        showHideTransition={"fade"}
        hidden={false}
      />
      <Navbar
        header={"Cart"}
        backgroundColor={colors.navbarBackgroundColor}
        color={colors.text}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => " " + item.id}
          renderItem={({ item }) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
                currentCount={item.count}
              />
            );
          }}
          style={[styles.flatList]}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
      <Divider customStyle={commonStyles.border} />
      <BreakupItem title={"Item Total"} amount={total} />
      <BreakupItem title={"Delivery Fee"} amount={0} />
      <BreakupItem title={"Discount"} amount={0} />
      <BreakupItem
        title={"Total"}
        amount={total}
        type={Status.FINAL}
      />

      <Button
        title={"Checkout"}
        isRound={true}
        sideMargin={40}
        style={{ marginTop: 20 }}
        onPress={handleCheckout}
      />
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default CartView;
