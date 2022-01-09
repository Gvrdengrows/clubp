import React from 'react';
import s from './Content.module.css';
import Myposts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <Myposts 
            postData={props.profilePage.postData} 
            dispatch={props.dispatch}
            newPostText={props.profilePage.newPostText} />
        </div>
    )
}

export default Content;