import React from 'react';
import Footer from './footer'
import Message from './message'
import './App.css';

function App() {
  return (
    <main class="main">
    <header>
      <img src="https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-ii/200/chat-512.png"
          alt ="logo"/>
      <span>Chat Central</span>
    </header>
    <h1>Johnathan</h1>
    {/* <!--<Message />--> */}
    <Footer />
    </main>
  );
}

export default App;
