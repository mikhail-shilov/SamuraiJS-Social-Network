import React from "react";
import {connect} from 'react-redux';
import Users from "./Users";
import {followAC, loadUsersAC, unFollowAC, setPageAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setUsers: (users, totalUsersCount) => {
            dispatch(loadUsersAC(users, totalUsersCount));
        },
        setPage: (page) => {
            dispatch(setPageAC(page));
        },
    })
};

const UsersProps = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersProps;