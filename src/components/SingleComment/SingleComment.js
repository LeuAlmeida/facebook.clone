import React from 'react';

import './SingleComment.css';

import image from '../../assets/img/personas/cat.jpg';

function SingleComment() {
  return (
    <div className="singleCommentContainer">
      <img src={image} />
      <div className="uniqueComment">
        <div className="theComment">
          <a href="#">Léu Almeida</a> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum, beatae alias eaque iusto excepturi exercitationem incidunt quam autem? Quas harum quidem ullam error perspiciatis beatae soluta molestias! Tenetur, sint!
        </div>
        <div className="commentActions">
          <a href="#">Curtir</a>
          <a href="#">Responder</a>
          <span>1h</span>
        </div>
      </div>
    </div>
  )
}

export default SingleComment;