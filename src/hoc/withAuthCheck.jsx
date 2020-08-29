import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withAuthCheck = Component => {

    const RedirectComponent = props => {
        if (!props.isAuth) return <Redirect to='/login'/>;
        return (<div><Component {...props} /></div>);
    }

    let mapStateToProps = state => ({isAuth: state.login.isAuthorized});
    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthCheck;