import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { JUG_ICON, MASTERCARD } from "assets/icons";
import AddressCard from "components/AddressCard";
import BottomNavigation from "components/BottomNavigation";
import Button from "components/Button";
import Icon from "components/Icon";
import Navbar from "components/Navbar";
import Payment from "components/Payment";
import Text from "components/Text";
import { TITLES } from "constants/strings";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-native";
import pathNames from "routes/pathNames";
import { selectItemsInCart, selectTotalAmount } from "selectors/cartSelectors";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./CheckoutView.styles";

const CheckoutView = () => {
  const products = useSelector(selectItemsInCart);
  const total = useSelector(selectTotalAmount);

  const history = useHistory();

  const handleCheckout = () => {
    history.push(pathNames.checkout);
  };

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
        header={"Checkout"}
        backgroundColor={colors.navbarBackgroundColor}
        color={colors.text}
      />

      <ScrollView
        style={[
          commonStyles.commonScrollViewContainer,
          styles.checkoutContainer,
        ]}
      >
        <View>
          <Text style={[commonStyles.textMain, styles.title]}>
            {TITLES.SHIPPING_TO}
          </Text>
          <View style={[, commonStyles.flexRow, styles.shippingContent]}>
            <AddressCard
              title={"Home"}
              address={"Floor-A BAT calony, 324B Sunrise Complex, New South"}
              active={true}
            />
            <AddressCard
              title={"Office"}
              address={"Floor-B CAT calony, 124B Sunset Complex, New East"}
            />
          </View>
        </View>

        <View>
          <Text style={[commonStyles.textMain, styles.title]}>
            {TITLES.PAYMENT_METHOD}
          </Text>
          <View style={styles.paymentMethodContainer}>
            <Payment
              title={"MasterCard"}
              text={"xxxx xxxx xxxx 5647"}
              image={MASTERCARD}
              checked={true}
            />
            <Payment
              title={"MasterCard"}
              text={"xxxx xxxx xxxx 5666"}
              image={MASTERCARD}
            />
            <Payment
              title={"MasterCard"}
              text={"xxxx xxxx xxxx 3647"}
              image={MASTERCARD}
            />
            <Payment
              title={"MasterCard"}
              text={"xxxx xxxx xxxx 7647"}
              image={MASTERCARD}
            />
          </View>
        </View>

        <View style={[styles.amountPayableContainer, commonStyles.flexRow]}>
          <Text style={[commonStyles.textMain, styles.title]}>
            {TITLES.AMOUNT_PAYABLE}
          </Text>
          <View style={commonStyles.flexRow}>
            <Icon icon={faDollarSign} size={14} color={colors.text} />
            <Text>{total}</Text>
          </View>
        </View>

        <Button
          title={"Pay Now!"}
          isRound={true}
          sideMargin={40}
          style={{ marginTop: 20 }}
          onPress={handleCheckout}
        />
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
};

export default CheckoutView;
