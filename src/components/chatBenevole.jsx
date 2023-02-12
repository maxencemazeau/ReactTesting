import React from 'react';
import { useState } from 'react';


const ChatBenevole = (props) => {

  const [UsernameBenevole, setUsernameBenevole] = useState('');
  const [MessageBenevole, setMessageBenevole] = useState('');

  const handleChangeUsername = (e) => {
    setUsernameBenevole(e.target.value);

  }

  const handleChangeMessage = (e) => {

    setMessageBenevole(e.target.value);
  }

  const handleBenevoleSubmit = (e) => {
    e.preventDefault();
    //props.item(UsernameBenevole);
    props.item(MessageBenevole);

  }

    return (
      <div>
        <form method ='post' onSubmit={handleBenevoleSubmit}>
            <input
          type="text"
          placeholder="Message"
          value={MessageBenevole}
          onChange={handleChangeMessage}
        />
            <button type='submit'>Add</button>
        </form>

        <p>{props.MessageBenevole}</p>
      </div>
      
    );
}

export default ChatBenevole;