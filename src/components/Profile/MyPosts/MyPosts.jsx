import React from "react";
import Post from './Post/Post'

const MyPosts = (props) => {


    const posts = props.posts.map(post => <Post msg={post.message} likes={post.likeCount} />);

    return (
        <div>
            {posts}
        </div>
    );
};

export default MyPosts;