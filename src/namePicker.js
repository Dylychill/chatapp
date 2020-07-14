import React, {useState, useEffect} from 'react'
import {FiEdit, FiSave } from 'react-icons/fi'

function NamePicker(props) {
  const [name, setName] = useState("")
  const [editing, setEditting] = useState(false)
  //  When page loads for this first time, run the following useEffect
  useEffect(()=>{
    const storedName = localStorage.getItem('name')
    if(storedName) {
      setName(storedName)
      props.onSend(storedName)
    }
  }, [])
  return <div className="name-input">
      {editing && <>
        <input type="text" value={name}
            onChange={e=> setName(e.target.value)}
            placeholder="Name">
        </input>
        <button
          onClick = {() => {
            if (name) { // only sends if there's content
              props.onSend(name)
              console.log(name + " inside NamePicker")
              setName("")
              setEditting(!editing)
              localStorage.setItem("name", name)
            }
          }}
        >OK</button>
      </>}
      {!editing && <>
      {/* <div>{name}</div> */}
      <FiEdit size={10} onClick={()=> setEditting(!editing)}></FiEdit>
      </>}
  </div>
}
export default NamePicker
