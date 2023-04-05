import { usersRequests } from "../components/API/API";

const TOGGLE_SUBSCRIPTION = 'TOGGLE_SUBSCRIPTION';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    usersCount: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isLoading: true,
    isFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SUBSCRIPTION:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        switch (u.followed) {
                            case true:
                                return { ...u, followed: false, }
                            case false:
                                return { ...u, followed: true, }
                        }
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        case TOGGLE_LOADER:
            return { ...state, isLoading: action.isLoading }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowClicked ?
                    [...state.isFollowing, action.userId] :
                    state.isFollowing.filter(user => user !== action.userId)
            }

        default:
            return state;
    }
}


export const toggleSubscription = (id) => ({ type: TOGGLE_SUBSCRIPTION, id, });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export const toggleLoader = (isLoading) => ({ type: TOGGLE_LOADER, isLoading });

export const toggleFollowing = (isFollowClicked, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollowClicked, userId });

export const getUsersThunk = (currentPage, usersCount) => (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleLoader(true));
    usersRequests.getUsers(currentPage, usersCount)
        .then(data => {
            dispatch(toggleLoader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
}

export const switchFollowingThunk = (user) => (dispatch) => {
    debugger;
    if (!user.followed) {
        dispatch(toggleFollowing(true, user.id))
        usersRequests.postFollow(user.id)
            .then(data => {
                if (data.resultCode === 0) dispatch(toggleSubscription(user.id));
                dispatch(toggleFollowing(false, user.id))
            })

    }
    else {
        dispatch(toggleFollowing(true, user.id))
        usersRequests.deleteFollow(user.id)
            .then(data => {
                if (data.resultCode === 0) dispatch(toggleSubscription(user.id));
                dispatch(toggleFollowing(false, user.id))
            })

    }
}

export default usersReducer;