export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateDraftActionCreator = (text) => ({type: 'UPDATE-DRAFT', text: text});

const profileReducer = (state, action) => {
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