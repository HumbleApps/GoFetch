import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import Counter from "components/Counter";
import Text from "components/Text";
import React, { FC } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./ProductCard.styles";
import { Operation } from "constants/operation";
import { addProductToCart, removeProductFromCart } from "actions/cartActions";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
  price: number;
  image?: ImageSourcePropType;
  description?: string;
  stock: number;
  id: number | string;
};

const ProductCard: FC<Props> = ({
  image,
  name,
  description,
  price,
  stock,
  id,
}) => {

  const dispatch = useDispatch();
  const handleChange = (operation, count) => {
    const product = {
      name, price, id, count
    }
    switch (operation) {
      case Operation.ADD: {
        dispatch(addProductToCart(product));
        break;
      }
      case Operation.REMOVE: {
        dispatch(removeProductFromCart(product));
        break;
      }
    }
  };
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
          <Counter
            maxCount={stock}
            handleCount={(operation, count) => handleChange(operation, count)}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
