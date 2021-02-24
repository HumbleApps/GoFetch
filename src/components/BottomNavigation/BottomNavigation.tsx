import React from "react";
import { View } from "react-native";
import { useRouteMatch, useHistory } from "react-router-native";
// import { selectUserDetails } from 'selectors/userSelector';

import BottomNavigationItem from "./BottomNavigationItem";

import pathNames from "routes/pathNames";

import styles from "./BottomNavigation.styles";
import { faBell, faBook, faBookmark, faHome, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import TrackEvents from 'constants/trackEvents';
// import useSegment from 'hooks/useSegment';
// import { useSelector } from 'react-redux';
// import { Icons } from 'constants/icons';

const BottomNavigation = () => {
  const match = useRouteMatch();
  const history = useHistory();
  // const userDetails = useSelector(selectUserDetails);
  // const { trackEventInSegment } = useSegment();


  const handlePress = (path: pathNames) => {
    history.push(path);
  };

  return (
    <View style={styles.container}>
      <BottomNavigationItem
        title="Home"
        iconName={faHome}
        isActive={match.path === pathNames.home}
        onPress={() => handlePress(pathNames.home)}
      />
      <BottomNavigationItem
        title="Bookings"
        iconName={faBook}
        onPress={() => handlePress(pathNames.booking)}
        isActive={match.path === pathNames.booking}
      />
      <BottomNavigationItem
        title="Orders"
        iconName={faShoppingCart}
        onPress={() => handlePress(pathNames.order)}
        isActive={match.path === pathNames.order}
      />
      <BottomNavigationItem
        title="Bookmark"
        iconName={faBookmark}
        onPress={() => handlePress(pathNames.booking)}
        isActive={match.path === pathNames.booking}
      />

      <BottomNavigationItem
        title="Notification"
        iconName={faBell}
        isActive={match.path === pathNames.notifications}
        onPress={() => handlePress(pathNames.notifications)}
      />
    </View>
  );
};

export default BottomNavigation;
