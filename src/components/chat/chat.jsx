import React, { useState, useEffect } from 'react';
import ChatBenevole from './chatBenevole';
import Username from './Username';

export default function Chat(){

const Chat = () => {
  
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState([]);

  const message = (item) => {
    setMessages((prevState)=> {
      return[...prevState, item];
    })
  }

  const usernames = (item) => {
    setUsername((prevState)=> {
      return[...prevState, item];
    })

    console.log(item);
  }

  return (
    <div>
        <ul>
        {messages.map((message, index) => (
          <p key={index}>
            {message}
          </p>
        ))}
      </ul>
      <ul>
        {username.map((usernames, index) => (
          <li key={index}>
            {usernames}
          </li>
        ))}
      </ul>
      <Username item={username}/>
      <ChatBenevole item={message}/>
    </div> 

  );
};
}