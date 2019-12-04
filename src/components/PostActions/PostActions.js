import React from "react";

import "./PostActions.css";

function PostActions() {
  return (
    <div className="postFeedCTA">
      <div className="CTALike">
        <i className="far fa-thumbs-up"></i>
        Curtir
      </div>
      <div className="CTAComment">
        <i className="far fa-comment-alt"></i>
        Comentar
      </div>
      <div className="CTAShare">
        <i className="fas fa-share"></i>
        Compartilhar
      </div>
    </div>
  );
}

export default PostActions;
