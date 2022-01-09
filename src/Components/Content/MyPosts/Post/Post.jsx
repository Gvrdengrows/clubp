import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://pm1.narvii.com/7499/7e8fcdc5875eb6d89b7426456186ba38e3e5f7afr1-512-512v2_uhq.jpg' alt='avatar' />
            { props.text }
            <div>
                <span>like: </span> { props.like }
            </div>
        </div>
    )
    

}

export default Post;
