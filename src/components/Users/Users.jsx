import React from "react";
import css from './Users.module.css'
import * as axios from "axios";
import userpic from '../../assets/icon-user.svg'
import Pagination from "./Pagination";
import Preloader from "../Common/Preloader";
import {NavLink} from "react-router-dom";
import {follow, getUser, unFollow} from "../../api/api";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    render() {
        return <div>
            <Pagination
                setPage={this.props.setPage}
                updateUsers={this.props.loadUsers}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                SwitchIsFetching={this.props.SwitchIsFetching}
                getUsers={this.props.getUsersThunk}
            />
            {this.props.isFetchingUsers ? <Preloader/> : null}
            {this.props.users.map(user =>
                <div className={css.userRecord} key={user.id}>
                    <div className={css.photoWrapper}>
                        <NavLink to={'/profile/' + user.id + '/'}>
                            <img className={css.userPic}
                                 src={(user.photos.small === null) ? userpic : user.photos.small}/>
                        </NavLink>
                        {
                            user.followed ?
                                <button disabled={this.props.isFollowing.some((userId) => userId === user.id)}
                                        onClick={() => {
                                            //this.props.SwitchIsFetching(true);
                                            this.props.SwitchIsFollowing(true, user.id);

                                            unFollow(user.id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        this.props.unFollow(user.id)
                                                    } else {
                                                        console.log('Что-то пошло не так... Сервер не подтвердил отписку.')
                                                    }
                                                    //this.props.SwitchIsFetching(false);
                                                    this.props.SwitchIsFollowing(false, user.id);
                                                });
                                        }}>Unfollow</button>
                                :
                                <button disabled={this.props.isFollowing.some((userId) => userId === user.id)}
                                        onClick={() => {
                                            //this.props.SwitchIsFetching(true);
                                            this.props.SwitchIsFollowing(true, user.id);
                                            follow(user.id)
                                                .then(data => {
                                                    console.log(user.followed);
                                                    if (data.resultCode === 0) {
                                                        console.log('Сервер подтвердил подписку! Ура!')
                                                        this.props.follow(user.id)
                                                    } else {
                                                        console.log('Что-то пошло не так... Сервер не подтвердил подписку.')
                                                    }
                                                    //this.props.SwitchIsFetching(false);
                                                    this.props.SwitchIsFollowing(false, user.id);

                                                });
                                        }}>Follow</button>
                        }

                    </div>

                    <div className={css.statusWrapper}>
                        <h1>{user.name}</h1>
                        <span>{user.status}</span>

                    </div>

                </div>
            )}
        </div>
    }


}


export default Users;