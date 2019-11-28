import React from "react";

import "./Chat.css";

import Contacts from './Contacts';
import Search from './Search';
import Games from './Games';

function Chat() {
  return (
    <div className="chatContainer">
      
      <Games />
      <Contacts />
      <Search />
      
    </div>
  );
}

export default Chat;
