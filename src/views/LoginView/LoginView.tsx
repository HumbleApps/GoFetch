import Login from "components/Login";
import Signup from "components/Signup";
import Tabs from "components/Tabs/Tabs";
import { Auth } from "constants/auth";
import React, { useState } from "react";
import { Image, SafeAreaView, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./LoginView.styles";

const PULSES = require("assets/images/pulses.jpg");

const LoginView = () => {
  const [view, setview] = useState(<Login />);
  const handleSelectedTab = (activeTab) => {
    switch (activeTab) {
      case Auth.LOGIN: {
        setview(<Login />);
        break;
      }
      case Auth.SIGNUP: {
        setview(<Signup />);
        break;
      }
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={PULSES} style={styles.image} />
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={"light-content"}
          showHideTransition={"fade"}
          hidden={true}
        />
        <Tabs
          first={Auth.LOGIN}
          second={Auth.SIGNUP}
          handleTabChange={(activeTab) => handleSelectedTab(activeTab)}
        />
        {view}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
