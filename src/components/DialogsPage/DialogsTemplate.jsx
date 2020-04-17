import React from "react";

import css from './Dialogs.module.css';

import Message from "./Message/Message";
import Dialog from "./Dialogs/Dialog";







const DialogsTemplate = (props) => {

    const draftReplica = (event) => {
        const text = event.target.value;
        console.log('text2');
        console.log(text);
        props.draftUpdate(text);
    };
    const addReplica = () => {
        props.addMessage();
    };
    const keyHandler = (event) => {
        console.log(event);
        if (event.key === 'Enter') {
            if (!event.shiftKey) {
                event.preventDefault();
                addReplica();
            } else {
                event.preventDefault();
                const text = event.target.value+'\n';
                props.draftUpdate(text);
            }
        }
    };

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
                    <div>
                        <textarea
                            autoFocus
                            onChange={draftReplica}
                            onKeyPress={keyHandler}
                            value={props.value}
                            placeholder='I HATE U!!11!11!'/>
                        <button onClick={addReplica}>Послать</button>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default DialogsTemplate;