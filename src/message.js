import React, {useState} from 'react'

function Message(props){
    return <div className="full-message">
        <div className="sender">{props.username.editName}</div>
        <div className="text">
            {props.text}
        </div>
    </div>

}

export default Message