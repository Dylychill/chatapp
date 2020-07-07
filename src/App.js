import React, {useState} from 'react';
import Footer from './footer'
import Message from './message'
import './App.css';

function App() {
  // useState will hold all messages in an array
  const [messages, setMessages] = useState([])
  return (
    <main className="main">
    <header>
      <img src="https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-ii/200/chat-512.png"
          alt ="logo"/>
      <span>Chat Central</span>
    </header>

    <div className ="message-container">
      {messages.map((m, i) => <Message key={i} text={m} />)}
    </div>

    <Footer
      onSend={(text) => setMessages([...messages, text])}
    />
    </main>
  );
}

export default App;
