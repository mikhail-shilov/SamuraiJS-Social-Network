import React from "react";
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <p>{props.msg}</p>
            <span className={css.likeCount}>Likes {props.likes}</span>
        </div>
    );
}

export default Post;