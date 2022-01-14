import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const Myposts = (props) => {
    let post = props.postData.map(p => <Post text={p.text} like={p.like} />)
    let newPostElement = React.createRef()
    let onAddPost = () => { props.addPost() }
    let onPostChange = () => { let text = newPostElement.current.value; props.updateNewPostText(text) }

    return (
        <div className={s.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

export default Myposts;
