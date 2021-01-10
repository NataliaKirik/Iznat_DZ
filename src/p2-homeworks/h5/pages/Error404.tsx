import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.errorText}>Oops, This page does not exist</div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.back}>go to homepage</NavLink>
        </div>
    );
}

export default Error404;
