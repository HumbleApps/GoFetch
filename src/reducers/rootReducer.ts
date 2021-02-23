import { combineReducers } from 'redux';

import auth from 'reducers/authReducer';
import loader from 'reducers/loaderReducer';

const rootReducer = combineReducers({
  auth,
  loader
});

export default rootReducer;
