import React from "react";
import {connect} from 'react-redux';
import Users from "./Users";
import {
    follow,
    setUsers,
    unFollow,
    setPageAC,
    SwitchIsFetching,
    SwitchIsFollowing,
    getUsersThunk
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetchingUsers: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
};

/*
Неоптимизированный вариант mapDispatchToProps. Можно сильно уменьшить объём кода передавая объект со списком AC

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
        SwitchIsFetching: (mode) => {
            dispatch(isFetchingSwitchAC(mode));
        },
    })
};*/

const mapDispatchToProps = {follow,  unFollow, SwitchIsFollowing, getUsersThunk};


const UsersProps = connect(mapStateToProps, mapDispatchToProps)(Users);
//при одинаковом названии пропса и AC - можно не писать "setPage: setPageAC" (оставлено для примера)

export default UsersProps;