import React from "react";

import "./WriteComment.css";

import imageLorem from "../../assets/img/personas/cat.jpg";
import commentAction from '../../assets/img/reactons/comment-action.png'

function WriteComment() {
  return (
    <div className="writeComment">
      <img src={imageLorem} className="profilePicture" />
      <div className="commentField">
        <input placeholder="Escreva um comentário..." />
        <img src={commentAction} />
      </div>
    </div>
  );
}

export default WriteComment;
