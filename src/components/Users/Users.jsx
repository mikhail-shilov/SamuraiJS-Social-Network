import React from "react";
import css from './Users.module.css'
import * as axios from "axios";
import userpic from '../../assets/icon-user.svg'
import Pagination from "./Pagination";
import Preloader from "../Common/Preloader";
import {NavLink} from "react-router-dom";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.SwitchIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=' + this.props.currentPage)
            .then(response => {
                this.props.loadUsers(response.data.items, response.data.totalCount);
                this.props.SwitchIsFetching(false);
            });
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
                                <button onClick={() => {
                                    this.props.unFollow(user.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.follow(user.id)
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