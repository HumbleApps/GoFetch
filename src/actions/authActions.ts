import { getToken } from 'utils/token/token';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const SET_FETCHING = 'SET_FETCHING';

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

export const isAuthenticated = async () => {
    try {
        const token = await getToken();
        return {
            type: IS_AUTHENTICATED,
            data: !!token
        }
    }
    catch (err) {
        console.log(err);
        return {
            type: IS_AUTHENTICATED,
            data: false
        }
    }
}

export const setAuthenticated = (value: boolean) => {
    return {
        type: IS_AUTHENTICATED,
        data: value
    }
}

export const setFetching = (isFetching: boolean): SetFetchingAction => ({
    type: SET_FETCHING,
    data: {
        isFetching,
    },
});

/** ------Action Types ***/
export type SetFetchingAction = {
    type: typeof SET_FETCHING;
    data: {
        isFetching: boolean;
    };
};