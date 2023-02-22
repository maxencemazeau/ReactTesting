import React from 'react';
import { useState } from 'react';


const Username = (props) => {

  const [Username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

  }

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    //props.item(UsernameBenevole);
    props.item(Username);

  }

    return (
      <div>
        <form method ='post' onSubmit={handleUsernameSubmit}>
            <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={handleUsernameChange}
        />
            <button type='submit'>User</button>
        </form>
      </div>
      
    );
}

export default Username;