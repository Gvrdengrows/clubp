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
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Content;