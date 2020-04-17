import React from "react";
import {NavLink} from "react-router-dom";

import css from '../Dialogs.module.css';

const Dialog = (props) => {
    const path = '/dialogs/' + props.link;
    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;