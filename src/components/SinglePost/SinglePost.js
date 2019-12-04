import React from 'react';

import './SinglePost.css';

import imageLorem from "../../assets/img/personas/cat.jpg";

function SinglePost() {
  return (
    <div className="postFeedCard">
        <div className="postFeedCardHeader">
          <div className="section1header">
            <div className="postListPic">
              <img src={imageLorem} />
            </div>
            <div className="postListInfos">
              <span className="postListTitle">Léu Almeida</span>
              <span className="postListDate">7h</span>
            </div>
          </div>

          <div className="optionsHeader"><i className="fas fa-ellipsis-h"></i></div>
        </div>

        <div className="postFeedCardContent">
          
        </div>
      </div>
  )
}

export default SinglePost;