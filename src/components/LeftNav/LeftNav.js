import React from 'react';

import './LeftNav.css';

import profile from '../../assets/img/profile.jpeg';

function LeftNav() {
  return (
    <div className="containerNav">
      <div className="profileNav">
        <img src={profile} />
        <span className="profileName">Léu Almeida</span>
      </div>

      <div className="navigationList activeList">
        <i class="far fa-window-maximize"></i>
        <span className="navigationListName active">Feed de Notícias</span>
      </div>

      <div className="navigationDefaultList">
        <i class="fab fa-facebook-messenger"></i>
        <span className="navigationListName">Messenger</span>
      </div>

      <div className="navigationDefaultList">
      <i class="fab fa-youtube"></i>
        <span className="navigationListName">Vídeos no Watch</span>
      </div>

      <div className="navigationDefaultList">
        <i class="fas fa-store"></i>
        <span className="navigationListName">Marketplace</span>
      </div>
    </div>
  )
}

export default LeftNav;