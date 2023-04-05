import * as React from 'react';
import post from './Post.module.css'

const Post = (props) => {
    return (
        <div className={post.content}>
            {props.message}
            <div className={post.like}>{props.likesCount} likes</div>
        </div>
    )
};

export default Post;