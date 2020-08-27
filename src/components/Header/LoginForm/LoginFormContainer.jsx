import React from "react";
import {loginIsFetching, setUserData} from "../../../redux/login-reducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {authAPI} from '../../../api/api'


class LoginFormContainer extends React.Component {
    componentDidMount() {
        this.props.loginIsFetching(true);
        authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setUserData(id, login, email);
                }
                this.props.loginIsFetching(false);
            });

    }


    render() {
        if (this.props.isFetching) {
            return (<div className='loginForm'>Загрузка...</div>)
            /*ОЧЕНЬ долго пытался понять почему постоянно выводятся оба преладера.
              загрузке текущего юзера и в загрузке профиля или списка
              Итого - ОДИНАКОВЫЕ НАЗВАНИЯ СВИЧКЕЙСОВ В РАЗНЫХ РЕДЬЮСЕРАХ
              */
        } else {
            const linkToProfile = (id, login) => {
                return (<NavLink to={'/profile/'+id}>Здравствуйте, {login}</NavLink>)
            }
            return (
                <div className='loginForm'>
                    {this.props.isAuthorized ? linkToProfile(this.props.userId, this.props.login) : <a href='https://social-network.samuraijs.com/login'>Войти</a>}
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