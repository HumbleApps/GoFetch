import React from "react";
import { View, Image } from "react-native";
import styles from "./ShopCard.styles";
import Text from "components/Text";
import commonStyles from "styles/common";
import { BLUE_CIRCLE_ICON, RED_CIRCLE_ICON, SHOP_ICON } from "assets/icons";
import { useHistory } from "react-router-native";
import pathNames from "routes/pathNames";

export default ({ active = false }) => {
    const history = useHistory();
  const handleStoreClick = () => {
    history.push(pathNames.store);
  };
  return (
    <View style={[active ? styles.shopCardActive : styles.shopCard]}>
      <View style={styles.shopCardImageContainer}>
        <Image source={SHOP_ICON} style={styles.shopCardImage} />
      </View>
      <View style={styles.shopCardTextContainer}>
        <Text style={commonStyles.textMain}>Walmart</Text>
        <View style={commonStyles.flexRow}>
          <View style={[commonStyles.flexRow, styles.tagAndText]}>
            <Image source={RED_CIRCLE_ICON} />
            <Text style={[commonStyles.textSecondary, styles.shopCardText]}>
              Grocery
            </Text>
          </View>
          <View style={commonStyles.flexRow}>
            <Image source={BLUE_CIRCLE_ICON} />
            <Text style={[commonStyles.textSecondary, styles.shopCardText]}>
              Product
            </Text>
          </View>
        </View>
        <Text style={[commonStyles.textSecondary, styles.shopCardText]}>
          Fresh Organic Groceries at your doorstep.
        </Text>
        <Text style={commonStyles.textLink} onPress={handleStoreClick}>
          Visit Store
        </Text>
      </View>
    </View>
  );
};
