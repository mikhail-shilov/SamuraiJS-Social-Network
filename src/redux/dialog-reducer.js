export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateMessageDraftActionCreator = (text) => ({type: 'UPDATE-MESSAGE-DRAFT', text: text});

const dialogReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-DRAFT':
            state.draftMessage = action.text;
            return state;
        case 'ADD-MESSAGE':
            let newMessage = {
                msg: state.draftMessage,
                id: 9
            };
            state.messages.push(newMessage);
            state.draftMessage = '';
            return state;
        default:
            return state;
    }
}
export default dialogReducer;