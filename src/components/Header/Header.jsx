import React from "react";
import css from "./Header.module.css"
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Header = (props) => {
    return (
        <header className={css.header}>
            Это ХЭАДЕР
            <LoginFormContainer/>
        </header>
    );
}

export default Header;