import React from "react";

import "./Chat.css";

import Contacts from './Contacts'

function Chat() {
  return (
    <div className="chatContainer">
      <div className="title">
        <span>CONTATOS</span>
      </div>

      <Contacts />

      <div className="searchChat">
        <i className="fas fa-search"></i>
        <input placeholder="Pesquisar" className="searchTitle" />
        <i className="fas fa-cog"></i>
        <i className="fas fa-edit"></i>
        <i className="fas fa-users-cog"></i>
      </div>
    </div>
  );
}

export default Chat;
