import React from 'react';
import {Route} from "react-router-dom";

import css from "./App.module.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/DialogsPage/DialogsProps';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
    return (
            <div className={css.appWrapper}>
                <Header/>
                <Navbar/>
                <main className={css.content}>
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
    );
}

export default App;
