export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

export const setLoggedInUser = (email: string) => {
    return {
        type: SET_LOGGED_IN_USER,
        data: email
    }
}