import React from "react";
import {connect} from "react-redux";

const Login = (props) => {
    return (<h1>Кто здесь?! {!(props.isAuth) ? null : "А это ты..."}</h1>);
}
let mapStateToProps = state => ({isAuth: state.login.isAuthorized});

export default connect(mapStateToProps)(Login);