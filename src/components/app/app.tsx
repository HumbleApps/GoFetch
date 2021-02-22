import React, { Fragment } from "react";
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
