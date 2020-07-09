import React, {useState} from 'react'

function Footer(props){
    const [text, setText] = useState('')
    return(
      <footer>
        <input className ="footer" type="text" value={text}
          onChange={e=> setText(e.target.value)}
          placeholder="Type your message"
          onKeyPress = {e=> {
            if (e.key==="Enter" && text) { //check exists
              props.onSend(text)
              setText("")
              // onKeyPress is like enter on the keyboard
            }
          }}
        />
        <button
          onClick = {() => {
            if (text) { // only sends if there's content
              props.onSend(text)
              setText("")
            }
          }}
        >↑</button>

        {/* When the button is clicked, return current text outward
            To whatever is importing Footer and clear message bar*/}
      </footer>)
}

export default Footer