import React from "react";
import {connect} from "react-redux";

import {addPostActionCreator, updateDraftActionCreator} from "../../../redux/profile-reducer";
import MyPostsTemplate from "./MyPostsTemplate";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.draftPost
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        draftUpdate: (text) => {
            dispatch(updateDraftActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    })
};

const MyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPostsTemplate);

export default MyPosts;