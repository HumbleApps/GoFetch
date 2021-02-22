import { SET_LOGGED_IN_USER } from "actions/authActions";

type InitialState = {
  email: string;
};

const initialState: InitialState = {
  email: ''
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER: {
      return {
        ...state,
        email: action.data,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
