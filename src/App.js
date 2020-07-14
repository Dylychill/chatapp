import React, {useEffect, useState} from 'react';
import Footer from './footer'
import Message from './message'
import NamePicker from './namePicker.js'
import './App.css';
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// the overarching app that will return a single room
function App() {
  // useEffect hook takes a function and a list of props, when props update, run the effect
  // giving an empty array will just run it onces
  // using this to deal with the anticpated / in the url, so the user doesnt have to manually type it
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])

  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

// an individual room
function Room(props) {
  // below is a hook from Evan's library
  const room = props.match.params.room
  const {messages, send} = useDatu(room)

  const [name, setName] = useState('')
  console.log(name)
  return (
    <main className="main">
    <header>
      <div className="logo">
        <img src="https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-ii/200/chat-512.png"
            alt ="logo"/>
        <span>Chat Central</span>
      </div>
      <NamePicker onSend={setName}/>
    </header>

    <div className = "message-container">
      {messages.map((m, i) => <Message key={i} text={m.text} username={m.name} />)}
    </div>

    <Footer
      onSend={text => send({text, room, name})}
      // Room data is attached to each message
    />
    </main>
  );
}

export default App;
// Below is the info for accessing the firebase - new one from firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPejdwgegFOGg5j4muolGiKKALwwO4fIA",
  authDomain: "chatapp-hcde438.firebaseapp.com",
  databaseURL: "https://chatapp-hcde438.firebaseio.com",
  projectId: "chatapp-hcde438",
  storageBucket: "chatapp-hcde438.appspot.com",
  messagingSenderId: "1054591925934",
  appId: "1:1054591925934:web:7299fc59b5d25abea3f73f",
  measurementId: "G-YK38GH1K74"
};
initialize(firebaseConfig)