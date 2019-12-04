import React from "react";

import "./PostActions.css";

function PostActions() {
  return (
    <div className="postFeedCTA">
      <div className="CTALike">
        <i className="far fa-thumbs-up"></i>
        Like
      </div>
      <div className="CTAComment">
        <i className="far fa-comment-alt"></i>
        Comment
      </div>
      <div className="CTAShare">
        <i className="fas fa-share"></i>
        Share
      </div>
    </div>
  );
}

export default PostActions;
