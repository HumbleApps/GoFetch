import React, { FC } from "react";
import { View } from "react-native";
import colors from "styles/colors";
import styles from "./Strip.styles";

type Props = {
  children?: any;
  color?: string;
};
const Strip: FC<Props> = ({ children, color = colors.success }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {children}
    </View>
  );
};

export default Strip;
