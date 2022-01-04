import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.state.messageData.map(m => <Message text={m.text} id={m.id} />)

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogWindow}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.chat}>
                {messageElements}
                <div className={s.panel}>
                    <div className={s.textarea}>
                        <textarea ref={newMessage}></textarea>
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