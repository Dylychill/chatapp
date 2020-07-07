import React from 'react';
import Footer from './footer'
import Message from './message'
import './App.css';
import {initialize, useDatu} from 'datu'

function App() {
  // below is a hook from Evan's library
  const {messages, send} = useDatu()
  return (
    <main className="main">
    <header>
      <img src="https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-ii/200/chat-512.png"
          alt ="logo"/>
      <span>Chat Central</span>
    </header>

    <div className = "message-container">
      {messages.map((m, i) => <Message key={i} text={m.text} />)}
    </div>

    <Footer
      onSend={(text) => send({text:text})}
    />
    </main>
  );
}

export default App;
// Below is the info for accessing the firebase - comes from Evan's library
const firebaseConfig = {
  apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
  authDomain: "chatter20202020.firebaseapp.com",
  databaseURL: "https://chatter20202020.firebaseio.com",
  projectId: "chatter20202020",
  storageBucket: "chatter20202020.appspot.com",
  messagingSenderId: "630230183323",
  appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};
initialize(firebaseConfig)