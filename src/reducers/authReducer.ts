import { SET_LOGGED_IN_USER } from "actions/authActions";

type InitialState = {
  email: string;
  uid: string;
};

const initialState: InitialState = {
  email: '',
  uid: ''
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER: {
      return {
        ...state,
        email: action.data.email,
        uid: action.data.uid
      };
    }

    default:
      return state;
  }
};

export default authReducer;
