import React from "react";
import {NavLink} from "react-router-dom";
import css from './Dialogs.module.css';
import {addMessageActionCreator, updateMessageDraftActionCreator} from "../../redux/dialog-reducer";




const Dialog = (props) => {
    const path = '/dialogs/' + props.link;
    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    );
};
const DialogsTemplate = (props) => {

    let newReplica = React.createRef();
    const draftReplica = () => {
        const text = newReplica.current.value;
        console.log('text');
        console.log(text);
        props.draftUpdate(text);
    }
    const addReplica = () => {
        props.addMessage(addMessageActionCreator());
    }


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
                        <textarea ref={newReplica} onChange={draftReplica} value={props.value} placeholder='I HATE U!!11!11!'/>
                        <button onClick={addReplica}>Послать</button>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default DialogsTemplate;