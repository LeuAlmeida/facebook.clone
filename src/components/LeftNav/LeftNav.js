import React from 'react';

import './LeftNav.css';

import profile from '../../assets/img/profile.jpeg';

import feedIcon from '../../assets/img/leftnav/feed-icon.png';
import messengerIcon from '../../assets/img/leftnav/messenger-icon.png';
import watchIcon from '../../assets/img/leftnav/watchvideos-icon.png';
import marketplaceIcon from '../../assets/img/leftnav/marketplace-icon.png';

function LeftNav() {
  return (
    <div className="containerNav">
      <div className="profileNav">
        <img src={profile} />
        <span className="profileName">Léu Almeida</span>
      </div>

      <div className="navigationList activeList">
        <img src={feedIcon} />
        <span className="navigationListName active">Feed de Notícias</span>
      </div>

      <div className="navigationDefaultList">
      <img src={messengerIcon} />
        <span className="navigationListName">Messenger</span>
      </div>

      <div className="navigationDefaultList">
        <img src={watchIcon} />
        <span className="navigationListName">Vídeos no Watch</span>
      </div>

      <div className="navigationDefaultList">
        <img src={marketplaceIcon} />
        <span className="navigationListName">Marketplace</span>
      </div>
    </div>
  )
}

export default LeftNav;