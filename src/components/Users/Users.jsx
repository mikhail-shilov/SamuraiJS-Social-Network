import React from "react";
import css from './Users.module.css'
import * as axios from "axios";
import userpic from '../../assets/icon-user.svg'
import Pagination from "./Pagination";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=' + this.props.currentPage).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount);
        });
    }

    render() {
        return <div>
            <Pagination
                setPage={this.props.setPage}
                updateUsers={this.props.setUsers}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
            />

            {this.props.users.map(user =>
                <div className={css.userRecord} key={user.id}>
                    <div className={css.photoWrapper}>
                        <img src={(user.photos.small === null) ? userpic : user.photos.small}/>
                        {user.followed ? <button onClick={() => {
                                this.props.unFollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
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