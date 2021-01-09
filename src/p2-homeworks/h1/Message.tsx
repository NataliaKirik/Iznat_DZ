import React from "react";
import styles from './Message.module.css';

type messageData = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: messageData) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt='avatar' className={styles.avatar}/>
            <div className={styles.container_message}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.message}>
                    {props.message}
                </div>
                <div className={styles.time}>
                    {props.time}
                </div>
            </div>
        </div>

    );
}

export default Message;
