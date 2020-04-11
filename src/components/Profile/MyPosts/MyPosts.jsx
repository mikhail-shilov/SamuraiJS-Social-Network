import React from "react";
import Post from './Post/Post'
import {addPostActionCreator, updateDraftActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let newPostData = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let postUpdate = () => {
        const text = newPostData.current.value;
        props.dispatch(updateDraftActionCreator(text));
    };

    const posts = props.posts.map(post => <Post msg={post.message} likes={post.likeCount}/>);

    return (
        <div>
            <h3>My feed</h3>
            <textarea
                ref={newPostData}
                onChange={postUpdate}
                value={props.value}
                placeholder='Что твориться?'
            />
            <button onClick={addPost}>Submit</button>
            <div>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;