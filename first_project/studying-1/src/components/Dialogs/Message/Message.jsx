import * as React from 'react';

import dialogs from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={props.isSender ? dialogs.your_message : dialogs.friend_message} >
            <div>{props.message}</div>
        </div>
    )
}


export default Message