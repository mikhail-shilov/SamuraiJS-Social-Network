import React from "react";
import * as axios from "axios";
import {loginIsFetching, setUserData} from "../../../redux/login-reducer";
import {connect} from "react-redux";
import Preloader2 from "../../Common/Preloader2";

class LoginFormContainer extends React.Component {
    componentDidMount() {
        this.props.loginIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}) //9326
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserData(id, login, email);

                }
                this.props.loginIsFetching(false);
            });

    }


    render() {
        if (this.props.isFetching) {
            return (<div className='loginForm'>Загрузка...</div>)
            /*ОЧЕНЬ долго пытался понять почему постоянно выводятся оба преладера.
              загрузке текущего юзеера и в загрузке профиля или списка
              Итого - ОДИНАКОВЫЕ НАЗВАНИЯ СВИЧКЕЙСОВ В РАЗНЫХ РЕДЬЮСЕРАХ
              */
        } else {
            return (
                <div className='loginForm'>
                    {this.props.isAuthorized ? "ТЫ" + this.props.login : "НЕТ"}
                </div>);
        }
    }
}

let mapStateToProps = (state) => ({
    isAuthorized: state.login.isAuthorized,
    isFetching: state.login.isFetchingLogin,
    userId: state.login.userId,
    login: state.login.login,
    email: state.login.email
});


export default connect(mapStateToProps, {setUserData, loginIsFetching})(LoginFormContainer);