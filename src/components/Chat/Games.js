import React from "react";

import "./Chat.css";

import Ball from '../../assets/img/games/8ball.png';
import Gartic from '../../assets/img/games/gartic.png';
import Uno from '../../assets/img/games/uno.png';
import Candy from '../../assets/img/games/candymatch.png';
import Flip from '../../assets/img/games/flipbottle.png';
import Garena from '../../assets/img/games/garenafreefire.png';

function Games() {
  return (
    <>

    <div className="title between">
      <span>JOGOS INSTANTÂNEOS</span>
      <span className="moreGames">MAIS</span>
    </div>
    <div className="gamesList">
      <i className="fas fa-chevron-left" style={{color: '#adb2bc', cursor: 'pointer'}}></i>
        <img src={Ball} />
        <img src={Gartic} />
        <img src={Uno} />
      <i className="fas fa-chevron-right" style={{color: '#adb2bc', cursor: 'pointer'}}></i>
    </div>
    <div className="title between" style={{marginTop: 20}}>
      <span>SEUS JOGOS</span>
      <span className="moreGames">MAIS</span>
    </div>
    <div className="gamesList">
      <i className="fas fa-chevron-left" style={{color: '#adb2bc', cursor: 'pointer'}}></i>
        <img src={Candy} />
        <img src={Flip} />
        <img src={Garena} />
      <i className="fas fa-chevron-right" style={{color: '#adb2bc', cursor: 'pointer'}}></i>
    </div>

    </>
  );
}

export default Games;
