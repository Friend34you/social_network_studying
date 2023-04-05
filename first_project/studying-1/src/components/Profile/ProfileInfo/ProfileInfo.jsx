import profileInfo from './ProfileInfo.module.css'
import Status from './Status';

const ProfileInfo = (props) => {
    debugger;
    return (
        <div>
            <div className='userAbout'>
                <Status status={props.status} setStatusThunk={props.setStatusThunk} authUserId={props.authUserId} currentUserId={props.userId}/>
                <div>Ищу работу? {props.lookingForAJob? 'Yes' : 'No'}</div>
                <div>{props.lookingForAJobDescription}</div>
            </div>
            <div className='userAvatar'><img style={{width: '200px'}} src={props.photos.large} /></div>
            <div style={{fontSize: 25, color: 'red'}}>
                {props.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;