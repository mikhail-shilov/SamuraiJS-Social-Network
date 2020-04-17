import React from "react";
import {connect} from 'react-redux';
import DialogsTemplate from "./DialogsTemplate";
import {addMessageActionCreator, updateMessageDraftActionCreator} from "../../redux/dialog-reducer";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        value: state.dialogsPage.draftMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        draftUpdate: (text) => {
            dispatch(updateMessageDraftActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
    })
};

const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsTemplate);

export default Dialogs;