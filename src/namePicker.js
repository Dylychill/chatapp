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

    </div>
}
export default NamePicker
