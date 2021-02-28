import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import { Status } from "constants/status";
import React, { FC } from "react";
import { View } from "react-native";
import colors from "styles/colors";
import commonStyles from "styles/common";
import Text from "../Text";
import styles from "./BreakupItem.style";

type Props = {
  title: string;
  amount: number;
  type?: Status;
};

const BreakupItem: FC<Props> = ({ title, amount, type = undefined }) => {
  let typeStyle = styles.default;
  switch (type) {
    case Status.FINAL: {
      typeStyle = styles.final;
      break;
    }
    default: {
      typeStyle = styles.default;
    }
  }

  return (
    <View
      style={[
        styles.totalBreakup,
        type === Status.FINAL ? styles.finalItemView : {},
      ]}
    >
      <View style={styles.breakupItem}>
        <Text style={[typeStyle]}>{title}</Text>
      </View>
      <View style={commonStyles.flexRow}>
        <Icon icon={faDollarSign} size={14} color={colors.golden}/>
        <Text style={[typeStyle]}>{amount}</Text>
      </View>
    </View>
  );
};

export default BreakupItem;
