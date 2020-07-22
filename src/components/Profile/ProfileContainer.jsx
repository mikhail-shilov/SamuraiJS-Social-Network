import React from "react";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {SwitchIsFetching} from "../../redux/users-reducer";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!this.props.match.params.userId) userId = this.props.currentUser;
        this.props.setUserProfile(null);
        this.props.SwitchIsFetching(true);
        getProfile(userId) //9326
            .then(data => {
                this.props.setUserProfile(data);
                this.props.SwitchIsFetching(false);

            });
    }

    render () {return <Profile {...this.props}/>;}
}

let mapStateToProps = (state) => ({profileInfo:state.profilePage.profileInfo, currentUser:state.login.userId});
export default withRouter(connect(mapStateToProps, {setUserProfile, SwitchIsFetching})(ProfileContainer));