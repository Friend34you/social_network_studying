import { profileRequests } from "../components/API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        { message: 'It is me, guys', id: 1, likesCount: 32 },
        { message: 'today is tuesday', id: 2, likesCount: 55 },
        { message: 'I love my mom so much!', id: 3, likesCount: 3 },
        { message: 'I am really tired', id: 4, likesCount: 72 },
    ],

    newPostText: 'test',

    profile: null,

    status: "none",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '')
                return {
                    ...state,
                    postsData: [{ message: state.newPostText, id: 5, likesCount: 0, }, ...state.postsData],
                    newPostText: '',
                }
            return state;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: { ...action.profile },
            }
        case SET_STATUS:
            debugger;
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST, })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, })

export const getProfileThunk = (selectedUser, authUser) => (dispatch) => {
    let userId = selectedUser;
    if (!userId) userId = authUser;
    profileRequests.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
}

export const getStatusThunk = (selectedUser, authUser) => (dispatch) => {
    let userId = selectedUser;
    if (!userId) userId = authUser;
    profileRequests.getStatus(userId)
        .then(data => {
            debugger;
            dispatch(setStatus(data));
        })
}

export const setStatusThunk = (status) => (dispatch) => {
    profileRequests.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0)
            {
                debugger;
                dispatch(setStatus(status));
            }
        })
}
export default profileReducer;

