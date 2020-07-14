import React, {useState} from 'react'

function Message(props){
    console.log(props)
    //console.log(props.name + " is the props.name")
    //console.log(props.username + " is the props.username")
    // console.log(props.username.name + " is the props.username.name")
    return <div className="full-message">
        <div className="sender">{props.username}</div>
        <div className="text">
            {props.text}
        </div>
    </div>

}

export default Message