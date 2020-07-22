import React from "react";
import css from "./Users.module.css";

const Pagination = (props) => {
    const clickHandler = (page) => {
            props.getUsers(props.pageSize, page);
    };


    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <ul className={css.pageList}>
            {pages.map(
                item => {return (<li key={item}
                                className={(props.currentPage * 1 === item * 1)
                                    ? css.pageList__item_active
                                    : css.pageList__item}>
                        <a onClick={() => {clickHandler(item)}}>{item}</a>
                    </li>)
                })}
        </ul>
    )
};
export default Pagination;