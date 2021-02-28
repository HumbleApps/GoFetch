import React, { FC } from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import Text from "components/Text";

import styles from "./Payment.styles";
import commonStyles from "styles/common";
import Checkbox from "components/Checkbox";

type Props = {
  title: string;
  text: string;
  image?: ImageSourcePropType;
  checked?: boolean;
};

const Payment: FC<Props> = ({ title, text, image, checked=false }) => {
  return (
    <View style={[styles.container, commonStyles.flexRow]}>
      <View style={commonStyles.flexRow}>
        <Checkbox checked={checked} onChange={() => {}} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <Image source={image} style={styles.image} resizeMode={"contain"} />
    </View>
  );
};

export default Payment;
