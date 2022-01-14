import React from 'react';
import s from './Content.module.css';
import MypostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MypostContainer store={props.store} />
        </div>
    )
}

export default Content;