import React from 'react';

import './SinglePost.css';

import PostActions from '../PostActions/PostActions';
import WriteComment from '../WriteComment/WriteComment';
import SingleComment from '../SingleComment/SingleComment';

import imageLorem from "../../assets/img/personas/cat.jpg";
import love from '../../assets/img/reactons/love.png';
import like from '../../assets/img/reactons/like.png';
import laugh from '../../assets/img/reactons/laugh.png';
import sad from '../../assets/img/reactons/sad.png';
import rage from '../../assets/img/reactons/rage.png';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim doloremque quidem odit earum velit sunt maiores ipsam id commodi quibusdam natus dicta, sint assumenda reiciendis obcaecati omnis nam corrupti?
        </div>

        <div className="postFeedReactons">
          <div className="section1Reactons">
            <img src={love} />
            <img src={laugh} />
            <span className="reactonCounter">8</span>
          </div>
          <div className="section2Reactons">
            1 compartilhamento
          </div>
        </div>

        <PostActions />
        <WriteComment />
        
        <SingleComment />
      </div>
  )
}

export default SinglePost;