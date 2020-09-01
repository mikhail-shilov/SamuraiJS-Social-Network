import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {doLogin} from "../../redux/login-reducer";

const Login = (props) => {
    const submitHandler = (formData) => {
        props.doLogin(formData)
    }
    return (<><h1>Кто здесь?! {!(props.isAuth) ? null : "А это ты..."}</h1><LoginFormReduxForm onSubmit={submitHandler}/></>);
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
            <div><Field component={'input'} name={'password'} placeholder={'password'}/></div>
            <div><Field component={'input'} type={'checkbox'} name={'rememberMe'}/>Remember me</div>
            <div><button>Login</button></div>
        </form>
    );
}

const LoginFormReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

let mapStateToProps = state => ({isAuth: state.login.isAuthorized});

export default connect(mapStateToProps, {doLogin})(Login);