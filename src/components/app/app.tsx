import React, { Fragment } from "react";
import { Provider } from "react-redux";

import Routes from "routes";
import store from "store";
<<<<<<< HEAD
import Loader from 'components/Loader';
=======
import LoginView from "views/LoginView";
>>>>>>> 4f29f80a7887db854f3bdf9ba690d7bc81974280

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
<<<<<<< HEAD
        <Routes>
          <Loader/>
        </Routes>
=======
        {/* <Routes> */}
          <LoginView/>
        {/* </Routes> */}
>>>>>>> 4f29f80a7887db854f3bdf9ba690d7bc81974280
      </Provider>
    </Fragment>
  );
}
