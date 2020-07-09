import React, {useState} from 'react'

function Message(props){
    console.log(props.username.editName)
    console.log(props.text)
    return <div className="full-message">
        <div className="sender">{props.username.editName}</div>
        <div className="text">
            {props.text}
        </div>
    </div>

}

export default Message