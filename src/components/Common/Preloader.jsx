import React from "react";
import css from './Preloader.module.css'
import preloaderImg from '../../assets/preloader2.svg'

const Preloader = (props) => {
    return (
        <div className={css.preloaderWrapper}>
            <img className={css.preloaderImage} src={preloaderImg}/>
        </div>
    )
};
export default Preloader;