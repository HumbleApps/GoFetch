import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import ProductCounterButton from "components/ProductCounterButton";
import Text from "components/Text";
import React, { FC } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./ProductCard.styles";

type Props = {
  name: string;
  price: number;
  image?: ImageSourcePropType;
  description?: string;
  stock: number;
  id: number | string;
};

const ProductCard: FC<Props> = ({ image, name, description, price, stock, id }) => {
  return (
    <View style={styles.storeCard} key={id}>
      <View style={styles.storeCardImageContainer}>
        <Image source={image} style={styles.storeCardImage} />
      </View>
      <View style={styles.storeCardTextContainer}>
        <Text style={commonStyles.textMain}>{name}</Text>
        <Text style={[commonStyles.textSecondary, styles.storeCardText]}>
          {description}
        </Text>
        <View style={[styles.storeCardPriceContainer, commonStyles.flexRow]}>
          <View style={[commonStyles.flexRow, styles.priceBox]}>
            <Icon icon={faDollarSign} color={colors.golden} size={14} />
            <Text style={styles.price}>{price}</Text>
          </View>
          <ProductCounterButton maxCount={stock}/>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
