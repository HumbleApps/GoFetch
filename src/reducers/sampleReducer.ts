// import { PaymentActionTypes } from 'actions/paymentsActions';
// import {
//   SET_CURRENT_VEHICLE,
//   SET_CURRENT_VEHICLE_EARNING_AMOUNT,
//   SET_EARNING_BREAKUP,
//   SET_EARNING_DETAILS,
//   SET_ISSUES,
//   SET_VEHICLES_EARNING,
//   TICKET_RAISED_STATUS,
//   SET_CURRENT_ACTIVE_MONTH,
// } from 'types/paymentsTypes';
// import { getDateFromEpoch, getTimeFromEpoch } from './../utils/time';

const SET_SHOPS = 'SET_SHOPS';

type InitialState = {
  shops: []
};

const initialState: InitialState = {
  shops: []
};

const paymentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SHOPS: {
      return {
        ...state,
        shops: action.data,
      };
    }

    default:
      return state;
  }
};

export default paymentsReducer;
