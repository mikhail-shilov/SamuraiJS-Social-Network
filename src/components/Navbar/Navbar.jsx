import React from "react";
import {NavLink} from "react-router-dom";

import css from "./Navbar.module.css"


const Navbar = (props) => {
    return (
        <nav className={css.navbar}>
            <ul>
                <li><NavLink to='/Profile' activeClassName={css.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink></li>
                <li><NavLink to='/users' activeClassName={css.active}>User</NavLink></li>
                <li><NavLink to='/news' activeClassName={css.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={css.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={css.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;