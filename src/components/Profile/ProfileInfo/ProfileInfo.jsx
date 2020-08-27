import React from "react";
import css from "./ProfileInfo.module.css"
import userPic from '../../../assets/icon-user.svg'
import dummyUser from '../../../assets/mO0bjdXJzIo.jpg'

import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
        if (!(props.profileInfo)) {
            return (<Preloader/>)
        } else {
    return (
        <div>
            <div className={css.cover}>
                <a>
                    <img className={css.ava}
                         src={!(props.profileInfo) ?
                             dummyUser :
                             ((!(props.profileInfo.photos.small)) ?
                                 userPic :
                                 props.profileInfo.photos.small)}
                    />
                </a>
                <a>
                    {!(props.profileInfo) ? '%username%' : props.profileInfo.fullName}
                </a>
            </div>
            <div>
            </div>
        </div>
    );
    }
};

export default ProfileInfo;