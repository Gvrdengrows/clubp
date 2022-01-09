import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';

const Myposts = (props) => {
    let post = props.postData.map(p => <Post text={p.text} like={p.like} id={p.id} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }
    return (
        <div className={s.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>

    )


}



export default Myposts;
