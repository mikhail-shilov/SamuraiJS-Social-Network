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
        if (action.type === 'UPDATE-DRAFT') {
            this._draftPostUpdate(action.text);
        }
        if (action.type === 'ADD-POST') {
            this._addPost();
        }
        if (action.type === 'UPDATE-MESSAGE-DRAFT') {
            this._draftMessageUpdate(action.text);
        }
        if (action.type === 'ADD-MESSAGE') {
            this._addMessage();
        }
    },

        _draftPostUpdate(text) {
            this._state.profilePage.draftPost = text;
            this._updateDOM(this.getState());
        },

        _addPost() {
            let newPost = {
                id: 5,
                message: this._state.profilePage.draftPost,
                likeCount: 3
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.draftPost = '';
            this._updateDOM(this.getState());
        },
        _draftMessageUpdate(text) {
            this._state.dialogsPage.draftMessage = text;
            this._updateDOM(this.getState());
        },

        _addMessage() {
            let newMessage = {
                msg: this._state.dialogsPage.draftMessage,
                id: 9
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.draftMessage = '';
            this._updateDOM(this.getState());
        },



};

export const addPostActionCreator = () => {
    return { type: 'ADD-POST' };
};
export const updateDraftActionCreator = (text) => {
    return { type: 'UPDATE-DRAFT', text: text };
};
export const addMessageActionCreator = () => {
    return { type: 'ADD-MESSAGE' };
};
export const updateMessageDraftActionCreator = (text) => {
    return { type: 'UPDATE-MESSAGE-DRAFT', text: text };
};



export default store;
window.store = store;
