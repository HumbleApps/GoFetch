import { Image, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import {
    faAddressBook,
    faIdCard,
    faUserAstronaut,
    faVirus
} from "@fortawesome/free-solid-svg-icons";

import { AVATAR } from "assets/icons";
import Banner from "components/Banner";
import Button from "components/Button";
import FooterItem from "components/FooterItem";
import Navbar from "components/Navbar";
import ProfileListItem from "components/ProfileListItem";
import React from "react";
import { STATUS_TYPE } from "constants/status";
import Text from "components/Text";
import colors from "styles/colors";
import commonStyles from "styles/common";
import pathNames from "routes/pathNames";
import styles from "./ProfileView.styles";
import useAuth from "components/hooks/useAuth";
import { useHistory } from "react-router-native";

const ProfileView = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    signOut();
    history.push(pathNames.home);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={colors.navbarBackgroundColor}
        barStyle={"light-content"}
        showHideTransition={"fade"}
        hidden={false}
      />
      <Navbar
        header={"Profile"}
        backgroundColor={colors.navbarBackgroundColor}
        color={colors.text}
      />
      <ScrollView
        style={[commonStyles.commonScrollViewContainer, styles.container]}
      >
        <View style={[commonStyles.flexRow, styles.headerSection]}>
          <View style={styles.imgContainer}>
            <Image source={AVATAR} />
          </View>
          <View>
            <Text style={commonStyles.textLight}>Welcome</Text>
            <Text style={commonStyles.textSecondary}>Mr. Prabhjot Singh</Text>
          </View>
        </View>

        <ProfileListItem icon={faAddressBook} title={"Address"} />
        <ProfileListItem icon={faIdCard} title={"My Cards"} />
        <ProfileListItem icon={faUserAstronaut} title={"Profile"} />
        <ProfileListItem icon={faVirus} title={"Settings"} />

        <Banner label={"How we can help you?"} type={STATUS_TYPE.INFO}/>

        <View style={[commonStyles.flexRow, styles.footerContainer]}>
          <FooterItem title={"Privacy Policy"} />
          <FooterItem title={"Imprint"} />
          <FooterItem title={"English"} />
        </View>
      </ScrollView>
        <Button title={"Log Out"} onPress={handleLogout} style={styles.logoutButton}/>
    </SafeAreaView>
  );
};
export default ProfileView;
