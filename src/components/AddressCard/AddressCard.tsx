import Text from "components/Text";
import React, { FC } from "react";
import { View } from "react-native";
import commonStyles from "styles/common";
import styles from "./AddressCard.styles";

type Props = {
  title: string;
  address: string;
  active?: boolean;
};

const AddressCard: FC<Props> = ({ title, address,active }) => {
  return <View style={[styles.container, active ? styles.active : {}]}>
      <Text style={[commonStyles.textMain, styles.title]}>{title}</Text>
      <Text style={[commonStyles.textSecondary, styles.subtitle]}>{address}</Text>
  </View>;
};

export default AddressCard;