export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateMessageDraftActionCreator = (text) => ({type: 'UPDATE-MESSAGE-DRAFT', text: text});

const initialState = {
    dialogs: [
        {name: 'Рулон Обоев', id: 1},
        {name: 'Ушат Помоев', id: 2},
        {name: 'Черед Застоев', id: 3},
        {name: 'Рекорд Надоев', id: 4},
        {name: 'Толпа Дебилов', id: 5},
        {name: 'Налёт Ковбоев', id: 6}
    ],
    messages: [
        {msg: 'АзЗаззААЗзааАА!1!1!!', id: 1},
        {msg: 'Hi?', id: 2},
        {msg: 'How are you?', id: 3},
        {msg: 'АЗАЗЗАЗАЗЗАААА!1!!1!1!!', id: 4},
    ],
    draftMessage: ''
};

const dialogReducer = (state = initialState, action) => {
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