import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import Myposts from './MyPosts';

const MypostContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }
    let state = props.store.getState()
    return <Myposts
        updateNewPostText={onPostChange}
        addPost={addPost}
        post={state.profilePage.postData}
        newPostText={state.profilePage.newPostText} />
}

export default MypostContainer;