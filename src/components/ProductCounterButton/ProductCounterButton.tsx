import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import Text from "components/Text";
import React, { FC, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "styles/colors";
import styles from "./ProductCounterButton.style";

type Props = {
  maxCount: number;
};

const Button: FC<Props> = ({ maxCount = 20 }) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    if (counter < maxCount) {
      setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handleDecrement}>
        <Icon icon={faMinus} color={colors.blackOverlay} size={14} />
      </TouchableOpacity>
      <Text style={[styles.number]}>{counter}</Text>
      <TouchableOpacity onPress={handleIncrement} style={{ padding: 0 }}>
        <Icon icon={faPlus} color={colors.blackOverlay} size={14} />
      </TouchableOpacity>
    </View>
  );
};

export default Button;
