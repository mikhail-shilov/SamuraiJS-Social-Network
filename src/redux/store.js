import {combineReducers, createStore} from "redux";

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    login: loginReducer
});

let store = createStore(reducers);

export default store;
window.store = store;