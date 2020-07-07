import React, {useState} from 'react'

function Message(props){
    return <div className="full-message">
        <div className="sender">sender</div>
        <div className="text">
            {props.text}
        </div>
    </div>

}

export default Message