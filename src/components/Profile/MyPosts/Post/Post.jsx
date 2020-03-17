import React from "react";
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <p><strong>{props.name+' '+props.lname}</strong> {props.msg}</p>
            <span className={css.likeCount}>Likes {props.likes}</span>
        </div>
    );
}

export default Post;