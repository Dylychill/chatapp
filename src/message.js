import React, {useState} from 'react'

function Message(props){
    console.log(props)

    return <div className="full-message" style={{
        flexDirection: props.isMe ? 'row-reverse' : 'row'
    }}>
        <div>
            <div className="sender">{props.username}</div>
            <div className="text" style={{
                background: props.isMe ? '#91cddb' : '#D7DDE8'
            }}>
                {props.text}
            </div>
        </div>
    </div>

}

export default Message