import React from "react";
import Post from './Post/Post';

import css from './MyPosts.module.css';

const MyPostsTemplate = (props) => {

    const handleSubmit = () => {
        props.addPost();
    };
    const handleChange = (event) => {
        const text = event.target.value;
        props.draftUpdate(text);
    };
    const handleKeyboard = (event) => {
        if (event.key === 'Enter') {
            if (!event.shiftKey) {
                event.preventDefault();
                handleSubmit();
            } else {
                event.preventDefault();
                const text = event.target.value+'\n';
                props.draftUpdate(text);
            }
        }
    };

    const posts = props.posts.map(post => <Post msg={post.message} likes={post.likeCount}/>);

    return (
        <div className={css.feed}>
            <div className={css.item}><h3>Самоизолента:</h3></div>
            <div className={css.item}>
                <textarea
                    autoFocus
                    onChange={handleChange}
                    onKeyPress={handleKeyboard}
                    value={props.value}
                    placeholder='Что (твориться)?'
                />
            </div>
            <button onClick={handleSubmit }>Submit</button>
            <div>
                {posts}
            </div>
        </div>
    );
};

export default MyPostsTemplate;