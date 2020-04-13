import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {name: 'Рулон Обоев', id: 1},
                {name: 'Ушат Помоев', id: 2},
                {name: 'Черед Застоев', id: 3},
                {name: 'Рекорд Надоев', id: 4},
                {name: 'Толпа Дебилов', id: 5}
            ],
            messages: [
                {msg: 'АзЗаззААЗзааАА!1!1!!', id: 1},
                {msg: 'Hi?', id: 2},
                {msg: 'How are you?', id: 3},
                {msg: 'АЗАЗЗАЗАЗЗАААА!1!!1!1!!', id: 4},
            ],
            draftMessage: '',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Здравствуйте, я подключился', likeCount: 79},
                {id: 2, message: 'Месяц в сети', likeCount: 49},
                {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
                {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
                {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
                {id: 2, message: '...', likeCount: 88},
                {id: 3, message: 'Зафиксирована тотальная деградация', likeCount: 1}
            ],
            draftPost: '',
        },
    },
    _updateDOM() {
        console.log('DOM not updated!');
    },
    callSubscriber(observer) {
        this._updateDOM = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._updateDOM(this._state);
    },
};





export default store;
window.store = store;
