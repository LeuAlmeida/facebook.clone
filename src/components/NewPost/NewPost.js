import React from "react";

import "./NewPost.css";

import profile from "../../assets/img/profile.jpeg";

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
            <i class="fas fa-image"></i>
            <span className="badgeTitle">Foto/vídeo</span>
          </div>

          <div className="badgePost">
            <img />
            <i class="fas fa-user-tag"></i>
            <span className="badgeTitle">Marcar amigos</span>
          </div>

          <div className="badgePost">
            <img />
            <i class="fas fa-smile-beam"></i>
            <span className="badgeTitle">Sentimento/a...</span>
          </div>

          <div className="badgePost">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <button className="createPostButton">Publicar</button>
      </div>
    </div>
  );
}

export default NewPost;
