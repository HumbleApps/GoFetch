import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import Text from "components/Text";
import React, { FC } from "react";
import { View } from "react-native";
import colors from "styles/colors";
import commonStyles from "styles/common";
import styles from "./ProfileListItem.styles";

type Props = {
  title: string;
  icon: IconProp;
};

const ProfileListItem: FC<Props> = ({ title, icon }) => {
  return (
    <View style={[styles.container]}>
      <View style={commonStyles.flexRow}>
        <View style={styles.icon}>
          <Icon icon={icon} size={18} color={colors.text} />
        </View>
        <View>
          <Text>{title}</Text>
        </View>
      </View>
      <Icon icon={faChevronRight} size={14} color={colors.secondaryGray} />
    </View>
  );
};

export default ProfileListItem;
