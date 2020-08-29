import React from 'react';
import {Route} from "react-router-dom";

import css from "./App.module.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/DialogsPage/DialogsProps';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersProps from "./components/Users/UsersProps";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
            <div className={css.appWrapper}>
                <Header/>
                <Navbar/>
                <main className={css.content}>
                    <Route path='/profile/:userId?' component={ProfileContainer} />
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/users' component={UsersProps}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>

                </main>
            </div>
    );
}

export default App;
