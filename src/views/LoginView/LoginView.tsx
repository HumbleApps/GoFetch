import React, { Fragment } from "react";

import Text from "components/Text";
import { View, Image, StatusBar, SafeAreaView } from "react-native";
import styles from "./LoginView.styles";
import { ScrollView } from "react-native-gesture-handler";

const PULSES = require("assets/images/pulses.jpg");

import Input from 'components/Input'

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
        <View style={styles.tabContainer}>
          <View style={[styles.tab, styles.tabActive, styles.tabLeft]}>
            <Text style={styles.tabText}>Login</Text>
          </View>
          <View style={[styles.tab, styles.tabRight]}>
            <Text style={styles.tabText}>Signup</Text>
          </View>
        </View>
        <Input/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
