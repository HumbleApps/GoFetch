import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';
import Icon from 'components/Icon';

import colors from 'styles/colors';

import styles from './BottomNavigation.styles';
// import { Icons } from 'constants/icons';

type Props = {
  title: string;
  iconName: any;
  isActive?: boolean;
  onPress?: () => void;
};

const BottomNavigationItem: FC<Props> = ({
  title,
  iconName,
  isActive = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Icon
          icon={iconName}
          color={isActive ? colors.golden : colors.secondaryGray}
          size={20}
        />
        <Text style={[styles.itemTitle, isActive && styles.itemTitleActive]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomNavigationItem;
