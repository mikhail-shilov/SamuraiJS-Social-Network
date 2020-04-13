import React from "react";
import css from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={css.cover}>
                <a>
                    <img className={css.ava} src='https://sun9-29.userapi.com/c855136/v855136608/6b22f/mO0bjdXJzIo.jpg'/>
                </a>
                <a>
                   %username%
                </a>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ProfileInfo;