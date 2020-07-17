import React from "react";
import css from "./ProfileInfo.module.css"
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
                             src={!(props.profileInfo) ? 'https://sun9-29.userapi.com/c855136/v855136608/6b22f/mO0bjdXJzIo.jpg' : props.profileInfo.photos.small}/>
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