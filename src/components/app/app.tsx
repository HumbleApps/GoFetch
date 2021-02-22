import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import Routes from "routes";
import store from "store";
import HomeView from "views/HomeView";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Routes>
          <HomeView />
        </Routes>
      </Provider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
