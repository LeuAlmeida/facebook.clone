import React from "react";

import "./Header.css";
import profile from "../../assets/img/profile.jpeg";

function Header() {
  return (
    <div className="nav">
      <div className="firstcolumn">
        <a href="https://github.com/LeuAlmeida" title="Ir para a página inicial do Facebook" className="githubURL">
          <i className="fab fa-facebook-square logo"></i>
        </a>

        <div className="searchfield">
          <input className="search" placeholder="Pesquisar" />
          <div className="iconsearch">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className="notifications">
        <div title="Perfil" className="perfil">
          <img src={profile} className="profileImage" />
          <span className="border-right-nav text-nav">Léu</span>
        </div>

        <span className="border-right-nav text-nav">Página Inicial</span>

        <span className="border-right-nav text-nav">Criar</span>

        <i className="fas fa-user-friends topicon" title="Solicitações de Amizade"></i>

        <i className="fab fa-facebook-messenger topicon text-white" title="Mensagens">
          <div className="badge">
            <span className="badge-icon">2</span>
          </div>
        </i>

        <i className="fas fa-bell topicon text-white" title="Notificações">
          <div className="badge">
            <span className="badge-icon">8</span>
          </div>
        </i>

        <i className="fas fa-question-circle topicon border-right-nav" title="Ajuda rápida"></i>

        <i className="fas fa-sort-down topicon"></i>
      </div>
    </div>
  );
}

export default Header;
