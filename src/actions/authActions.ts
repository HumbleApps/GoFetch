export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

export const setLoggedInUser = ({ email, uid }) => {
    return {
        type: SET_LOGGED_IN_USER,
        data: { email, uid }
    }
}