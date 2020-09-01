import React from "react";
import css from './Dialogs.module.css';

import Message from "./Message/Message";
import Dialog from "./Dialogs/Dialog";
import {Field, reduxForm} from "redux-form";


const DialogsTemplate = (props) => {

    const handleSubmit = (formData) => {
        console.log(formData);
        //props.addMessage();
    }

    const dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} link={dialog.id}/>);
    const messagesElements = props.messages.map(message => <Message text={message.msg}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <AddMessageForm onSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )

};

let AddMessageForm = props => {

    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            if (!event.shiftKey) {
                event.preventDefault();
                props.handleSubmit();
            }
        }
    };

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                onKeyPress={keyHandler}
                name={'message'}
                component={'textarea'}
                autoFocus
                placeholder='I HATE U!!11!11!'/>
            <button type="submit">Send</button>
        </form>
    )
}
AddMessageForm = reduxForm({form: 'addMessageForm'})(AddMessageForm);


export default DialogsTemplate;