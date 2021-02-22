import { combineReducers } from 'redux';

import auth from 'reducers/sampleReducer';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
