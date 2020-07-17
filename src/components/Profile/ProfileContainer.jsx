import React from "react";
import css from './Profile.module.css';

import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {SwitchIsFetching} from "../../redux/users-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.SwitchIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2') //9326
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render () {return <Profile {...this.props}/>;}

}

let mapStateToProps = (state) => ({profileInfo:state.profilePage.profileInfo});

export default connect(mapStateToProps, {setUserProfile, SwitchIsFetching})(ProfileContainer);