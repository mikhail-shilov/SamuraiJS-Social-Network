import React from "react";
import {NavLink} from "react-router-dom";
import css from './Dialogs.module.css';

const Dialog = (props) => {
    const path = '/dialogs/' + props.link;
    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    );
}

const Dialogs = (props) => {


    const dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} link={dialog.id}/>);

    const messagesElements = props.messages.map(message => <Message text={message.msg} />);

    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;