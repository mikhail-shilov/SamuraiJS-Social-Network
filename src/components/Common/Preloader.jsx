import React from "react";
import css from './Preloader.module.css'
import preloader from '../../assets/preloader2.svg'

const Preloader = (props) => {
    return (
        <div className={css.preloaderWrapper}>
            <img className={css.preloaderImage} src={preloader}/>
        </div>
    )
};
export default Preloader;