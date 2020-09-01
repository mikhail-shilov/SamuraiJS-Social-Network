import {authAPI, profileAPI} from "../api/api";

const initalState = {
    isLogging: false,
    data: null,
    isAuthorized: false,
};

const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        case 'IS-FETCHING-SWITCH-LOGIN':
            return {
                ...state,
                isFetchingLogin: action.mode,
            }
        default: {
            return state;
        }
    }
};

export const setUserData = (userId, login, email) => ({type: 'SET-USER-DATA', data: {userId, login, email}});
export const loginIsFetching = (mode) => ({type: 'IS-FETCHING-SWITCH-LOGIN', mode});
export const doLogin = (loginData) => (dispatch) => {return (
    authAPI.login(loginData.login, loginData.password, loginData.rememberMe = false))
        .then((response) => profileAPI.getProfile(response)).then((response) => {
        dispatch(setUserData(response.userId, response.fullName))
    })

}


export default loginReducer;