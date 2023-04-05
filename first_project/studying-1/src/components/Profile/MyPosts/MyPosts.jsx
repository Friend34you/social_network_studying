import * as React from 'react';
import myPosts from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElements = props.profilePage.postsData.map(post =>
        <Post message={post.message} key={post.id} id={post.id} likesCount={post.likesCount} />)


    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={myPosts.post}>
            Мои посты
            <div>Новый пост</div>
            <div>
                <textarea
                    value={props.profilePage.newPostText}
                    onChange={onPostChange}
                    className={myPosts.newPostArea} name="" id="" cols="30" rows="10" />
                <button onClick={onAddPost} className={myPosts.newPostBtn}>Новый пост</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;