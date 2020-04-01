import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [
    {name: 'Рулон Обоев', id: 1},
    {name: 'Ушат Помоев', id: 2},
    {name: 'Черед Застоев', id: 3},
    {name: 'Рекорд Надоев', id: 4},
    {name: 'Толпа Дебилов', id: 5}
];
const messages = [
    {msg: 'АзЗаззААЗзааАА!1!1!!', id: 1},
    {msg: 'Hi?', id: 2},
    {msg: 'How are you?', id: 3},
    {msg: 'Мамку твою ебал!', id: 4},
];
const posts = [
    {id: 1, message: 'Здравствуйте, я подключился', likeCount: 79},
    {id: 2, message: 'Месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'Ещё месяц в сети', likeCount: 49},
    {id: 2, message: 'ГРОБГРОБКЛАДБИЩЕПИДОР!!!1!!1!!', likeCount: 24},
    {id: 2, message: 'БЛЯТЬ!111!!', likeCount: 14},
    {id: 2, message: 'ТЫПИДОР', likeCount: 88},
    {id: 3, message: 'Мамку твою ебал!1!!11 ААЗАзАЗАазАзАзА!1!!', likeCount: 1}
];



ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
