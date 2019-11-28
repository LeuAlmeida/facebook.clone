import React from "react";

import "./Chat.css";

import Contacts from './Contacts';
import Search from './Search';

function Chat() {
  return (
    <div className="chatContainer">
      <div className="title">
        <span>CONTATOS</span>
      </div>

      <Contacts />
      <Search />
      
    </div>
  );
}

export default Chat;
