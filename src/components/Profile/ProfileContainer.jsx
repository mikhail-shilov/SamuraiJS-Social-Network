import React from "react";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!this.props.match.params.userId) userId = 2;
        this.props.getProfile(userId);
    }
    render () {return <Profile {...this.props}/>;}
}
let mapStateToProps = (state) => ({profileInfo: state.profilePage.profileInfo, currentUser:state.login.userId});
export default withRouter(connect(mapStateToProps, {getProfile})(ProfileContainer));