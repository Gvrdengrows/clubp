import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://wallpaperaccess.com/full/1579893.jpg' alt='theme' />
            </div>
            <div className={s.decriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;
