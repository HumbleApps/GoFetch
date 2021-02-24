import {
  GIFT_ICON,
  MAP_ICON,
  PICKUP_TRUCK_ICON
} from "assets/icons";
import BottomNavigation from "components/BottomNavigation";
import Button from "components/Button";
import Navbar from "components/Navbar";
import ShopCard from "components/ShopCard";
import Text from "components/Text";
import React from "react";
import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./ShopScreen.styles";


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
        header={"Shops"}
        backgroundColor={colors.secondary}
        color={colors.text}
      />
      <ScrollView style={commonStyles.commonScrollViewContainer}>
        <View style={styles.container}>
          <View style={commonStyles.center}>
            <Text style={[commonStyles.textMain, commonStyles.spacing]}>
              N 200, Brampton, Canada
            </Text>
            <Image source={MAP_ICON} />
            <Text style={[commonStyles.textLight, commonStyles.spacing]}>
              Choose Store
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              leftImage={GIFT_ICON}
              title={"Delivery"}
              style={[commonStyles.button, commonStyles.buttonActive]}
            />
            <Button
              leftImage={PICKUP_TRUCK_ICON}
              title={"PickUp"}
              style={[commonStyles.button]}
            />
          </View>
          <ShopCard/>
          <ShopCard active={true}/>
          <ShopCard/>
          <ShopCard/>
          <ShopCard/>
        </View>
      </ScrollView>
      <BottomNavigation/>
    </SafeAreaView>
  );
};

export default ShopScreen;
