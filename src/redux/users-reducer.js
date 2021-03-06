import {usersAPI} from "../api/api";

const initalState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Юзер',
            status: 'Мне грустно',
            photos: {
                small: '/assets/mO0bjdXJzIo.jpg',
                large: '/assets/mO0bjdXJzIo.jpg'
            },
        },
    ],
    pageSize: 90,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
};

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            }
        case 'LOAD-USERS':
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount * 1,

            }
        case 'SET-PAGE':
            return {
                ...state,
                currentPage: action.page,
            }
        case 'IS-FETCHING-SWITCH':
            return {
                ...state,
                isFetching: action.mode,
            }
        case 'IS-FOLLOWING-SWITCH':
            return {
                ...state,
                isFollowing: action.mode ?
                    [...state.isFollowing, action.userId] :
                    state.isFollowing.filter(id => id !== action.userId)
            }
        default: {
            return state;
        }
    }
};

export const follow = (id) => ({type: 'FOLLOW', userId: id});
export const unFollow = (id) => ({type: 'UNFOLLOW', userId: id});
export const setUsers = (users, totalUsersCount) => ({
    type: 'LOAD-USERS',
    users: users,
    totalUsersCount: totalUsersCount
});
export const setPageAC = (page) => ({type: 'SET-PAGE', page: page}); //AC в конце для примера
export const SwitchIsFetching = (mode) => ({type: 'IS-FETCHING-SWITCH', mode});
export const SwitchIsFollowing = (mode, userId) => ({type: 'IS-FOLLOWING-SWITCH', mode, userId});
export const getUsersThunk = (pageSize, pageNumber) => (dispatch) => {
    dispatch(SwitchIsFetching(true));
    usersAPI.getUser(pageSize, pageNumber).then(data => {
        dispatch(setPageAC(pageNumber));
        dispatch(setUsers(data.items, data.totalCount));
        dispatch(SwitchIsFetching(false));
    })
}
export default usersReducer;

