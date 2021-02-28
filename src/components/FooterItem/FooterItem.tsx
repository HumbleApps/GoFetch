import React, { FC } from "react";

import Icon from "components/Icon";
import Text from "components/Text";
import { View } from "react-native";
import colors from "styles/colors";
import commonStyles from "styles/common";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./FooterItem.styles";

type Props = {
  title: string;
};

const ProfileListItem: FC<Props> = ({ title }) => {
  return (
    <View style={commonStyles.flexRow}>
      <Text style={styles.footerLinks}>{title}</Text>
      <Icon icon={faChevronRight} size={12} color={colors.gray} />
    </View>
  );
};

export default ProfileListItem;
