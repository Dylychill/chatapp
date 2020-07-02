import React, {useState} from 'react'

function Footer(){
    const [text, setText] = useState('')
    return(
      <footer>
        <input class ="footer" type="text" value={text}
          onChange={e=> setText(e.target.value)}
          placeholder="Type your message"
        />
        <button></button>
      </footer>)
}

export default Footer