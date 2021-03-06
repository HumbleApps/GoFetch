import React, { Fragment } from "react";
import { Provider } from "react-redux";

import Routes from "routes";
import store from "store";
import LoginView from "views/LoginView";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        {/* <Routes> */}
          <LoginView/>
        {/* </Routes> */}
      </Provider>
    </Fragment>
  );
}
