export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export const setLoggedInUser = ({ email, uid }) => {
    return {
        type: SET_LOGGED_IN_USER,
        data: { email, uid }
    }
}

export const createNewUser = (payload) => {
    return {
        type: CREATE_NEW_USER,
        data: payload
    }
}

export const signInUser = (payload) => {
    return {
        type: SIGNIN,
        data: payload
    }
}

export const signOutUser = () => {
    return {
        type: SIGNOUT,
    }
}