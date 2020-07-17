import React from "react";
import css from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPostsProps'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPosts />
        </div>
    );
};

export default Profile;