import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import css from "./App.module.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
    return (
        <BrowserRouter>
            <div className={css.appWrapper}>
                <Header/>
                <Navbar/>
                <main className={css.content}>
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
