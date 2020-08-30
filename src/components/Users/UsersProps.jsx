import {connect} from 'react-redux';
import Users from "./Users";
import {
    follow,
    unFollow,
    SwitchIsFollowing,
    getUsersThunk
} from "../../redux/users-reducer";
import {compose} from "redux";
import withAuthCheck from "../../hoc/withAuthCheck";

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

export default compose(
    connect(mapStateToProps, {follow,  unFollow, SwitchIsFollowing, getUsersThunk}),
    withAuthCheck
)(Users);