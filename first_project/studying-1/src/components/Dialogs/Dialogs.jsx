import * as React from 'react';
import DialogItem from './DialogItem/DialogItem';
import dialogs from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)


    let messagesElements = props.dialogsPage.messagesData.map(message =>
        <Message message={message.message} key={message.id} id={message.id} isSender={message.isSender} />)

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

    }

    return (
        <div className={dialogs.wrapper}>
            <div className={dialogs.items}>
                {dialogsElements}

            </div>
            <div className={dialogs.messages}>
                {messagesElements}
                <div className='message_area'>
                    <textarea value={props.dialogsPage.newMessageText} 
                              onChange={onMessageChange} name="" id="" cols="20" rows="4"></textarea>
                    <button onClick={onSendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs