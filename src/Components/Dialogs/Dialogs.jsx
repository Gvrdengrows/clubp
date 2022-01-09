import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogReducer';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.store.getState().dialogPage
    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = state.messageData.map(m => <Message text={m.text} id={m.id} />)
    let newMessageBody = state.newMessageBody

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let updateMessage = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    return (
        <div className={s.dialogWindow}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.chat}>
                <div className={s.messageItems}>
                    {messageElements}
                </div>
                <div className={s.panel}>
                    <div className={s.textarea}>
                        <textarea value={newMessageBody} 
                        onChange={updateMessage} placeholder='Ara ara'/>
                    </div>
                    <div className={s.button}>
                        <button onClick={ sendMessage }>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;