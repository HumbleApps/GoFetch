import React, { Fragment } from "react";
import { Provider } from "react-redux";

import Routes from "routes";
import store from "store";
import Loader from "components/Loader";
import WithBootstrap from "components/WithBootstrap";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Routes>
          <WithBootstrap />
          <Loader />
        </Routes>
      </Provider>
    </Fragment>
  );
}
