import React, { Fragment } from "react";

import Text from "components/Text";
import { View, Image, StatusBar, SafeAreaView } from "react-native";
import styles from "./LoginView.styles";
import { ScrollView } from "react-native-gesture-handler";

const PULSES = require("assets/images/pulses.jpg");

import Input from 'components/Input'
import Tabs from "components/Tabs/Tabs";

const LoginView = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={PULSES} style={styles.image} />
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={"light-content"}
          showHideTransition={"fade"}
          hidden={true}
        />
        <Tabs first={"Login"} second={"Signup"}/>
        <Input/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
