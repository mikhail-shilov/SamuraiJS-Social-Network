import React from "react";
import css from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts'


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                value={props.value}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;