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
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'UPDATE-DRAFT':
            state.draftPost = action.text;
            break;
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.draftPost,
                likeCount: 3
            };
            state.posts.push(newPost);
            state.draftPost = '';
            break;
    }
    return state;
};

export default profileReducer;