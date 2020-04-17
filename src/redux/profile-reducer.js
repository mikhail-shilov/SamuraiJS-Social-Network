export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateDraftActionCreator = (text) => ({type: 'UPDATE-DRAFT', text: text});

const initalState = {
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

    let localState = {...state,};

    switch (action.type) {
        case 'UPDATE-DRAFT': {
            localState.draftPost = action.text;
            return localState;
        }

        case 'ADD-POST': {
            localState.draftPost = state.draftPost;
            let newPost = {
                id: 5,
                message: localState.draftPost,
                likeCount: 3
            };
            localState.posts = [newPost, ...state.posts];
            //localState.posts.push(newPost);
            localState.draftPost = '';
            return localState;
        }
        default: {
            return state;
        }
    }
};

export default profileReducer;