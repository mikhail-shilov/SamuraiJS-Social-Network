import React from "react";
import {NavLink} from "react-router-dom";
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    <div className={css.dialog}><NavLink to='/dialogs/Rulon' activeClassName={css.active}>Рулон Обоев</NavLink></div>
                    <div className={css.dialog}><NavLink to='/dialogs/Ushat' activeClassName={css.active}>Ушат Помоев</NavLink></div>
                    <div className={css.dialog}><NavLink to='/dialogs/Chered' activeClassName={css.active}>Черед Застоев</NavLink></div>
                    <div className={css.dialog}><NavLink to='/dialogs/Record' activeClassName={css.active}>Рекорд Надоев</NavLink></div>
                </div>
                <div className={css.messages}>
                    <div className={css.message}>Hi?</div>
                    <div className={css.message}>How are you?</div>
                    <div className={css.message}>Мамку твою ебал!</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;