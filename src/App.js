import React, { useState, useEffect } from 'react';
import ChatBenevole from './components/chatBenevole';
import ChatMessage from './components/ChatMessage';

const Chat = () => {
  
  const [messages, setMessages] = useState([]);
  

  const message = (item) => {
    setMessages((prevState)=> {
      return[...prevState, item];
    })

    console.log(item);
  }

  return (
    <div>
        <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message}:</strong> {message.item}
          </li>
        ))}
      </ul>
      <ChatBenevole item={message}/>
    </div> 

  );
};

export default Chat;