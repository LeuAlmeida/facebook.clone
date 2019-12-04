import React from "react";

import "./NewPost.css";

import profile from "../../assets/img/profile.jpeg";

import foto from '../../assets/img/reactons/foto-video-icon.png';
import tag from '../../assets/img/reactons/tag-friends-icon.png';
import feelings from '../../assets/img/reactons/feelings-icon.png';

function NewPost() {
  return (
    <div className="createPostCard">
      <div className="headerPostCard">
        <span>Criar publicação</span>
      </div>
      <div className="bodyPostCard">
        <img src={profile} />
        <input placeholder="No que você está pensando, Léu?" />
      </div>
      <div className="footerPostCard">
        <div className="badgesPost">
          <div className="badgePost">
            <img />
            <img src={foto} />
            <span className="badgeTitle">Foto/vídeo</span>
          </div>

          <div className="badgePost">
            <img />
            <img src={tag} />
            <span className="badgeTitle">Marcar amigos</span>
          </div>

          <div className="badgePost">
            <img />
            <img src={feelings} />
            <span className="badgeTitle">Sentimento/a...</span>
          </div>

          <div className="badgePost">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <button className="createPostButton">Publicar</button>
      </div>
    </div>
  );
}

export default NewPost;
