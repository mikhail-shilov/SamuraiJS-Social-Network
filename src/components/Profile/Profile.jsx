import React from "react";
import css from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div>
            content
            <img src='https://klike.net/uploads/posts/2019-01/1547367975_11.jpg'/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;