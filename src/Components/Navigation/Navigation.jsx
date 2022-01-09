import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem';
import s from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='content' className={navData => navData.isActive ? s.active : s.item}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='dialogs' className={navData => navData.isActive ? s.active : s.item}>messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className={navData => navData.isActive ? s.active : s.item}>music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='news' className={navData => navData.isActive ? s.active : s.item}>news</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' className={navData => navData.isActive ? s.active : s.item}>settings</NavLink>
            </div>
        </nav>
    )

}
export default Navigation;