import {usersAPI} from "../api/api";

const initalState = {
    profileInfo: null,
    posts: [
        {id: 1, message: 'Здравствуйте, я подключился', likeCount: 79},
        {id: 2, message: 'Месяц в сети', likeCount: 49},
        {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
        {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
        {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
        {id: 2, message: '...', likeCount: 88},
        {id: 3, message: 'Зафиксирована тотальная деградация', likeCount: 1},
        {id: 3, message: 'Социалка на одного аутиста', likeCount: 999}
    ],
    draftPost: '',
};

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...state, profileInfo: action.profileData,
            };
        case 'UPDATE-DRAFT':
            return {
                ...state,
                draftPost: action.text
            };
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.draftPost,
                likeCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                draftPost: ''
            }
        default: {
            return state;
        }
    }
};


const setUserProfile = (profileData) => ({type: 'SET-PROFILE', profileData});
export const getProfile = (profileId) => (dispatch) => {
    dispatch(setUserProfile(null));
    usersAPI.getProfile(profileId).then(response => {
            dispatch(setUserProfile(response));
        }
    )
};
export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateDraftActionCreator = (text) => ({type: 'UPDATE-DRAFT', text: text});


export default profileReducer;