import React, {useState} from 'react'

function NamePicker(props) {
    const [editName, setEditName] = useState("")
    return <div className="name-input">
        <input type="text" value={editName}
            onChange={e=> setEditName(e.target.value)}
            placeholder="Name">
        </input>
        <button
          onClick = {() => {
            if (editName) { // only sends if there's content
              props.onSend(editName)
              setEditName("")
            }
          }}
        >OK</button>
        {/* Current state of this file changes every name for every message based on new input
        I haven't tested with other users, so right now it is accurate enough. Does the messages database
        have space for names?
         */}
    </div>
}
export default NamePicker
