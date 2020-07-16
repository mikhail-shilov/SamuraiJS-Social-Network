import React from "react";
import css from "./Users.module.css";
import * as axios from "axios";

const Pagination = (props) => {
    const clickHandler = (page) => {
        props.SwitchIsFetching(true);
        props.updateUsers([], 0);

        axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=' + page).then(response => {
            props.updateUsers(response.data.items, response.data.totalCount);
            props.setPage(page);
            props.SwitchIsFetching(false);
        });
    };


    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pageCount; i++) {
        pages.push(i);
    }



    return (
        <ul className={css.pageList}>
            {pages.map(
                item => {
                    return (<li className={(props.currentPage*1 === item*1) ? css.pageList__item_active : css.pageList__item}>
                        <a onClick={() => {clickHandler(item)}}>
                            {item}
                        </a>
                    </li>)})}
        </ul>
    )
};
export default Pagination;