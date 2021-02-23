import { IS_AUTHENTICATED, SET_LOGGED_IN_USER, SET_FETCHING } from "actions/authActions";

type InitialState = {
  email: string;
  uid: string;
  isAuthenticated: boolean;
  isFetching: boolean;
};

const initialState: InitialState = {
  email: '',
  uid: '',
  isAuthenticated: false,
  isFetching: false,
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

    case IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.data
      }
    }
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.data.isFetching,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
