import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    let [showMenu, setShowMenu] = useState(false)
    return (
        <div className={s.headerWrapper}>
            <div className={s.componentRoutesWrapper}>
                <div className={s.text} onClick={() => {
                    setShowMenu(!showMenu)
                }}>React homeworks
                </div>
            </div>
            {showMenu && (<ul className={s.main_Menu}>
                <li><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior </NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior Plus</NavLink></li>
            </ul>)}


        </div>
    );
}

export default Header;
