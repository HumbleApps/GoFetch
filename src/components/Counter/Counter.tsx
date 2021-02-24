import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import Text from "components/Text";
import { Operation } from "constants/operation";
import React, { FC, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "styles/colors";
import styles from "./Counter.style";

type Props = {
  maxCount: number;
  handleCount: (operation: string, count: number) => void;
};

const Counter: FC<Props> = ({ maxCount = 20, handleCount }) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    if (counter < maxCount) {
      handleCount(Operation.ADD, counter + 1);
      setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
    if (counter > 0) {
      handleCount(Operation.REMOVE, counter - 1);
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

export default Counter;
