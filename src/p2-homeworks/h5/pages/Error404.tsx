import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.image}><img src="https://cdn.lifedaily.com/assets/7ada33/dist/images/error/404.svg"
                                          alt="cat"/></div>
            <div className={s.errorText}>Oops, This page does not exist</div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.back}>go to homepage</NavLink>
        </div>
    );
}

export default Error404;
