import React from "react";
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div>
            <Post name='Рулон' lname='Обоев' msg='Здравствуйте, я подключился' likes='3' />
            <Post name='Черед' lname='Застоев' msg='Здравствуйте, я подключился' likes='6' />
            <Post name='Рекорд' lname='Надоев' msg='Здравствуйте, я подключился' likes='7' />
        </div>
    );
};

export default MyPosts;