import {combineReducers, createStore} from "redux";

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;