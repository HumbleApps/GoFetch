import { combineReducers } from 'redux';

import auth from 'reducers/authReducer';
import loader from 'reducers/loaderReducer';
import cart from 'reducers/cartReducer';

const rootReducer = combineReducers({
  auth,
  loader,
  cart
});

export default rootReducer;
