import React from "react";
import Post from './Post/Post';
import css from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

let MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'message'}
                autoFocus
                placeholder='Что (твориться)?'
            />
            <button>Submit</button>

        </form>
    )
}
MyPostsForm  = reduxForm({form: 'myPostsForm'})(MyPostsForm);


const MyPostsTemplate = (props) => {
    const submitHandler = (formData) => {
        console.log(formData.message);
        //props.addPost(formData.message);
    }

    const handleKeyboard = (event) => {
        if (event.key === 'Enter') {
            if (!event.shiftKey) {
                event.preventDefault();
                //handleSubmit();
            } else {
                event.preventDefault();
                const text = event.target.value + '\n';
                //props.draftUpdate(text);
            }
        }
    };

    const posts = props.posts.map(post => <Post msg={post.message} likes={post.likeCount}/>);

    return (
        <div className={css.feed}>
            <div className={css.item}><h3>Самоизолента:</h3></div>
            <div className={css.item}>
                <MyPostsForm onSubmit={submitHandler}/>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};

export default MyPostsTemplate;