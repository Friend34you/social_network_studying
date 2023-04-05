import * as React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div className={profile.content}>
            <img src='https://i.pinimg.com/originals/04/5a/89/045a89991c14091eee19ecaef517102a.jpg' />
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;