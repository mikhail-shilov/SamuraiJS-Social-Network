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
        case 'UPDATE-MESSAGE-DRAFT': {
            let localState = {...state};
            console.log(action);
            localState.draftMessage = action.text;
            return localState;
        }
        case 'ADD-MESSAGE': {
            let localState = {...state};
            localState.messages = [...state.messages];
            localState.draftMessage = state.draftMessage;
            let newMessage = {
                msg: state.draftMessage,
                id: 9
            };
            localState.messages.push(newMessage);
            localState.draftMessage = '';
            return localState;
        }
        default:
            return state;
    }
}
export default dialogReducer;