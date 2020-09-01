import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, putUserStatus} from "../../redux/profile-reducer";
import withAuthCheck from "../../hoc/withAuthCheck";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!this.props.match.params.userId) userId = 2;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    userStatus: state.profilePage.status,
    currentUser: state.login.userId});

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, putUserStatus}),
    withAuthCheck
)(ProfileContainer);