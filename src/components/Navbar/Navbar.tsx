import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  faArrowLeft,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';

import Text from 'components/Text';
import Icon from 'components/Icon';
// import CustomIcon from 'components/CustomIcon';

import isEmpty from 'utils/isEmpty';
// import LANGS from 'constants/languages';

import useNavbar from './useNavbar';
import styles from './Navbar.styles';
import pathNames from 'routes/pathNames';
import { useHistory } from 'react-router-native';
// import { Icons } from 'constants/icons';

type Props = {
  header?: string;
  isBackable?: boolean;
  showProfile?: boolean;
  showLanguage?: boolean;
  showNotification?: boolean;
  backPath?: pathNames;
};

const Navbar: FC<Props> = ({
  header = '',
  isBackable = true,
  showProfile = false,
  showLanguage = false,
  showNotification = false,
  backPath,
}) => {
  const history = useHistory();

  const handleNotifications = () => {
    history.push(pathNames.shops);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {isBackable && (
          <TouchableOpacity onPress={() => {}}>
            <Icon icon={faArrowLeft} />
          </TouchableOpacity>
        )}
        {!isEmpty(header) && <Text style={styles.header}>{header}</Text>}
      </View>
    </View>
  );
};

export default Navbar;
