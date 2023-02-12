import React, { useState, useEffect } from 'react';
import ChatBenevole from './components/chatBenevole';

const Chat = () => {
  
  //const [messageBenevole, setMessageBenevole] = useState([]);
  //const [messageParent, setMesssageParent] = useState([]);
  const [messages, setMessages] = useState([]);
  
  /* const listUser =  [{
    id : 1,
    name : 'maxence',
    statut : 'Parent',
  }, 
  {
    id : 2,
    name : 'florian',
    statut : 'Benevole',
  }];


const listParent = listUser.filter(info =>{
  return info.statut === 'Parent';
});

const listBenevole = listUser.filter(info =>{
  return info.statut === 'Benevole';
});


 const listParentFilter = listParent.map(listParent =>{
    return listParent.name.toString();
  } );

  const listBenevoleFilter = listBenevole.map(listBenevole =>{
    return listBenevole.name.toString();
  } );

  const nameString = listParentFilter.toString();
  const name2String = listBenevoleFilter.toString();

  */

  /*const handleParentSubmit = event => {
    event.preventDefault();

    if (!inputUsername || !inputMessage) return;

    if(inputUsername === nameString) {
    const message = { username: inputUsername, text: inputMessage };
    
    setMessages(prevMessages => [...prevMessages, message]);
    setInputMessage('');
    console.log('parent');
    } else {
      console.log('Vous nêtes pas un parent');
  }
}; */

  /* const getMessageBenevole = (item) => {
      const message = {username : item.UsernameBenevole, text : item.messageBenevole};
      setMessageBenevole(prevMessagesBenevole => [...prevMessagesBenevole, message]);
  } */


  const message = (item) => {
    setMessages((prevState)=> {
      return[...prevState, item];
    })

    console.log(item);
  }

  const username = (item2) => {
    setMessages((prevState)=> {
      return[...prevState, item2];
    })

    console.log(item2);
  }
  /* const getMessageParent = (item) => {
    setMesssageParent(prevMessagesParent => [...prevMessagesParent, message]);
  } */


  /* const handleBenevoleSubmit = event => {
    event.preventDefault();

    if (!inputUsername2 || !inputMessage2) return;

    if(inputUsername2 === name2String) {
    const message = { username: inputUsername2, text: inputMessage2 };
    
    setMessages(prevMessages => [...prevMessages, messages]);
    setInputMessage('');
    console.log('benevole');
    } else {
      console.log('Vous nêtes pas un benevole');
  }
    
  }; */

  return (
    <div>
        <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.username}:</strong> {message.text}
          </li>
        ))}
      </ul>
      <ChatBenevole item={message}/>

      <div>
        <ChatBenevole item={message}/>
        <ChatBenevole item={username}/>
      </div>
    </div> 

  );
};

export default Chat;