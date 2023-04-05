import { headerRequests } from "../components/API/API";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } })

export const getAuthUserDataThunk = () => (dispatch) => {
    headerRequests.getAuthMe()
    .then(data => {
        if (data.resultCode == 0) {
            let { id, login, email } = data.data;
            dispatch(setUserData(id, login, email));
        }
    })
}

export default authReducer;
